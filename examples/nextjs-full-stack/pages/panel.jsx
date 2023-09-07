import { useRef, useEffect } from "react";
import Head from "next/head";

import initMiro from "../initMiro.js";

export async function getServerSideProps({ req, query }) {
  const { userId, miro } = initMiro(req);

  const boardId = query.boardId;
  if (!boardId) {
    return {
      notFound: true,
    };
  }

  // redirect to auth url if user has not authorized the app
  if (!(await miro.isAuthorized(userId))) {
    return {
      redirect: {
        destination: miro.getAuthUrl(boardId),
        permanent: false,
      },
    };
  }

  return {
    props: {
      boardId: boardId,
    },
  };
}

// get video stream and play it in the video element
async function initCamera(video) {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
  video.play();
}

// upload image to our api
async function uploadBlob(blob, boardId) {
  const fileName = "camera.jpeg";
  const file = new File([blob], fileName, {
    type: "image/jpeg",
  });

  const data = new FormData();
  data.append("file", file, fileName);

  await fetch(`/api/upload?boardId=${boardId}`, {
    method: "POST",
    body: data,
  });

  window.close();
}

export default function Main({ boardId }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const width = 640;

  useEffect(() => {
    initCamera(videoRef.current);
  }, [videoRef]);

  const clickHandler = (e) => {
    e.target.disabled = true;

    // draw the image on canvas
    const canvas = canvasRef.current;
    const video = videoRef.current;

    const height = video.videoHeight / (video.videoWidth / width);
    canvas.width = width;
    canvas.height = height;

    canvas.getContext("2d").drawImage(video, 0, 0, width, height);
    canvas.toBlob(async (blob) => {
      try {
        await uploadBlob(blob, boardId);
      } finally {
        e.target.disabled = false;
      }
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Miro camera upload</title>
      </Head>

      <div>
        <div>
          <video ref={videoRef} style={{ width: "100%", maxWidth: "400px" }}>
            Video stream not available.
          </video>
        </div>

        {boardId ? (
          <div>
            <button className="button button-primary" onClick={clickHandler}>
              <span className="icon-eye"></span> Take photo
            </button>
          </div>
        ) : (
          <strong>Missing boardId in query params</strong>
        )}

        <canvas style={{ display: "none" }} ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

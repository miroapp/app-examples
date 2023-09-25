import * as React from "react";
import type { Image } from "@mirohq/websdk-types";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [state, setState] = React.useState<"idle" | "busy">("idle");

  React.useEffect(() => {
    const init = async () => {
      if (!videoRef.current) {
        return;
      }

      const video = videoRef.current;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      video.srcObject = stream;
      video.play();
    };

    init();
  }, [videoRef.current]);

  const width = 800;
  const height = 450;

  const captureSelf = async () => {
    if (!videoRef.current) {
      return;
    }

    setState("busy");

    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const blob = canvas.toDataURL("image/png");

    const viewport = await miro.board.viewport.get();

    const currentUrl = new URL(location.href);
    const id = currentUrl.searchParams.get("image");
    const reference = currentUrl.searchParams.get("reference");

    let image: Image;
    if (id) {
      image = (await miro.board.getById(id)) as Image;

      console.log({ image });

      image.url = blob;
      await image.sync();
    } else {
      const coords = {
        x: viewport.x + viewport.width / 2,
        y: viewport.y + viewport.height / 2,
      };

      if (reference) {
        const source = (await miro.board.getById(reference)) as Image;
        coords.x = source.x + source.width + source.width / 3;
        coords.y = source.y;
      }

      image = await miro.board.createImage({
        url: blob,
        x: coords.x,
        y: coords.y,
      });
    }

    await image.setMetadata("source", "selfie");
    await miro.board.viewport.zoomTo([image]);
    await miro.board.ui.closeModal();
  };

  const isBusy = state === "busy";

  return (
    <main>
      <button
        className="button button-primary"
        type="button"
        onClick={captureSelf}
        disabled={isBusy}
      >
        Capture 📸
      </button>
      {isBusy && <p>Taking selfie...</p>}
      <video playsInline ref={videoRef} width={width} height={height} />
    </main>
  );
};

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);

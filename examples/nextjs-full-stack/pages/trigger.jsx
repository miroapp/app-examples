import { useEffect } from "react";
import Head from "next/head";

export default function () {
  useEffect(() => {
    window.miro.board.ui.on("icon:click", async () => {
      // open popup with the video stream
      window.open(
        `/?boardId=${(await window.miro.board.getInfo()).id}`,
        "cameraCapture",
        "popup"
      );
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Miro camera upload</title>
        <script src="https://miro.com/app/static/sdk/v2/miro.js"></script>
      </Head>
    </div>
  );
}

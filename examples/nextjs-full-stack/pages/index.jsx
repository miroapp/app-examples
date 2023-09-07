import { useEffect } from "react";
import Head from "next/head";

export default function () {
  useEffect(() => {
    window.miro.board.ui.on("icon:click", async () => {
      // open panel with the video stream
      window.miro.board.ui.openModal({
        url: `/panel?boardId=${(await window.miro.board.getInfo()).id}`,
        width: 520,
        height: 720,
      });
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

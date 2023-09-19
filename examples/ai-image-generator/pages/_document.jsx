import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/mirotone/dist/styles.css"
        ></link>
        <script src="https://miro.com/app/static/sdk/v2/miro.js" />
      </Head>
      <body>
        <div id="root">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}

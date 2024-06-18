import React, { PropsWithChildren } from "react";
import Script from "next/script";
import "../assets/style.css";

import { MiroSDKInit } from "../components/SdkInit"; // Corrected the casing of the file name

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <Script
          src="https://miro.com/app/static/sdk/v2/miro.js"
          strategy="beforeInteractive"
        />
        <MiroSDKInit />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

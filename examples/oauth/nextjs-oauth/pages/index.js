import { useState, useEffect } from "react";
import Head from "next/head";

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);

  // On Page Load
  useEffect(() => {
    fetch("api/authenticate")
      .then((response) => response.json())
      .then((result) => setAuthenticated(result.authenticated));
  }, []);

  return (
    <div className={"container"}>
      <Head>
        <title>Miro Full Stack Example</title>
        <meta name="description" content="Miro Full Stack Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? (
        <p>Logged in sucessfully!</p>
      ) : (
        <a href="/api/signin">Sign In</a>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

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
        <title>Full-stack Miro app example</title>
        <meta name="description" content="Full-stack Miro app example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? (
        <p>Logged in sucessfully!</p>
      ) : (
        <Link href="/api/signin">Sign In</Link>
      )}
    </div>
  );
}

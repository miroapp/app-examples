import { useEffect } from "react";

import hero from "../assets/hero.svg";

import BynderSignIn from "./BynderSignIn";
import Categories from "./Categories";

const Home = ({
  signedIn,
  setSignedIn,
}: {
  signedIn: boolean;
  setSignedIn: (value: boolean) => void;
}) => {
  // Check sign in status on load
  useEffect(() => {
    fetch(`/.netlify/functions/authorize`, {
      credentials: "same-origin",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const signedInValue = result.signedIn === "true";
        setSignedIn(signedInValue);
      });
  }, []);

  return (
    <div id={"home-container"}>
      <img src={hero} id={"logo"} draggable={false} />

      {signedIn ? (
        <Categories />
      ) : (
        <div id={"sign-in-container"}>
          <p id={"sign-in-label"}>Please sign in to continue</p>
          <BynderSignIn setSignedIn={(value) => setSignedIn(value)} />
        </div>
      )}
    </div>
  );
};

export default Home;

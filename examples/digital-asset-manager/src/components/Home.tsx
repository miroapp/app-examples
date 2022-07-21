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
    const authorizeUser = async () => {
      const authorizationData = await fetch(`/.netlify/functions/authorize`, {
        credentials: "same-origin",
      });

      const result = await authorizationData.json();

      const signedInValue = result.signedIn === "true";
      setSignedIn(signedInValue);
    };

    authorizeUser();
  }, []);

  return (
    <div className="home-container">
      <img src={hero} className="logo" draggable={false} />
      {signedIn ? (
        <Categories />
      ) : (
        <div className="sign-in-container">
          <p className="sign-in-label">Please sign in to continue</p>
          <BynderSignIn setSignedIn={(value) => setSignedIn(value)} />
        </div>
      )}
    </div>
  );
};

export default Home;

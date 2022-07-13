import { motion } from "framer-motion";

const BynderSignIn = ({
  setSignedIn,
}: {
  setSignedIn: (value: boolean) => void;
}) => {
  const handleSignIn = async () => {
    const timer = setInterval(() => {
      fetch(`/.netlify/functions/authorize`, {
        credentials: "same-origin",
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          const signedInValue = result.signedIn === "true";
          if (signedInValue) {
            clearInterval(timer);
            setSignedIn(true);
          }
        });
    }, 1000);
  };

  return (
    <>
      <motion.a
        className="bynder-sign-in-button"
        whileHover={{ backgroundColor: "#2E51F5" }}
        href={`/.netlify/functions/signin`}
        target="_blank"
        onClick={handleSignIn}
      >
        Sign in with SSO
      </motion.a>
    </>
  );
};

export default BynderSignIn;

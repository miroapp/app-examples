import { motion } from "framer-motion";
import * as React from "react";

const style = {
  width: 10,
  height: 10,
  opacity: 0.5,
  margin: 8,
  borderRadius: 5,
  display: "inline-block",
  background: "#050038",
};

const variants = {
  start: {
    scale: 0.3,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 0,
  },
};

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        style={style}
        variants={variants}
        initial="start"
        animate="end"
        transition={{
          repeat: "Infinity",
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 1,
          delay: 0,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial="start"
        animate="end"
        transition={{
          repeat: "Infinity",
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 1,
          delay: 0.2,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial="start"
        animate="end"
        transition={{
          repeat: "Infinity",
          repeatType: "reverse",
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
      />
    </div>
  );
};

export default Loader;

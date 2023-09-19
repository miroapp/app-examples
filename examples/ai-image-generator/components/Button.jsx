// components/Button.js

import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cs1 ce12 button button-primary"
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;

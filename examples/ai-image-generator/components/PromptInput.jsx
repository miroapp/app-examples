// components/TextInput.js

import React, { useState } from "react";

const TextInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="example-1"
      />
    </div>
  );
};

export default TextInput;

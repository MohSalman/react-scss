import React from "react";
import "./TextArea.scss";

const TextArea = ({ className, placeholder }) => {
  return (
    <textarea
      className={`textarea ${className} `}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;

import React from "react";
import "./Input.scss";

const Input = ({ type, className, placeholder, max }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        max={max}
        className={`input ${className}`}
      />
    </>
  );
};
export default Input;

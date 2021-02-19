import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, className, disabled, type }) => {
  return (
    <button
      type={type}
      className={`btn  ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

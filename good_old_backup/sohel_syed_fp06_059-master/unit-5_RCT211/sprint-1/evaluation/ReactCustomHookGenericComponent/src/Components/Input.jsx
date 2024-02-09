import React from "react";
import "./Input.css";
import propTypes from "prop-types";
//
const Input = ({ type, size, variant, value, onChange }) => {
  return (
    <input
      data-testid="inputTag"
      variant={variant}
      value={value}
      size={size}
      className={(variant, size="md")}
    />
  );
};

export default Input;

Input.propTypes = {
  type: propTypes.string,
  size: propTypes.string,
  variant: propTypes.string.isRequired,
  value: propTypes.string,
};

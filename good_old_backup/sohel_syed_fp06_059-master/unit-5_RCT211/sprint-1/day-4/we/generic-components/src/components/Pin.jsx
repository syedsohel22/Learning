import React, { useRef, useState } from "react";
import Proptypes, { element } from "prop-types";
import PinInput from "./PinInput";
const Pin = ({ length, maxLength }) => {
  const [inputBox] = useState(new Array(length).fill("q"));
  const inputRef = useRef([]);

  const onChangeHandler = (e, index) => {
    if (index < length - 1 && e.target.value.length > 0) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <div>
      {inputBox.map((item, index) => {
        return (
          <PinInput
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            key={index}
            maxLength={maxLength}
            onChangeHandler={(e) => onChangeHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Pin;

Pin.Proptypes = {
  length: Proptypes.number.isRequired,
  maxLength: Proptypes.number,
};

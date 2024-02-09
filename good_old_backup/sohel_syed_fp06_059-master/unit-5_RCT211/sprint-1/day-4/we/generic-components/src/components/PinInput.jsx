import React, { ForwardedRef, forwardRef } from "react";

const PinInput = forwardRef(({ maxLenght, onChangeFunc }, ref) => {
  return <input ref={ref} maxLength={maxLenght} onChange={onChangeFunc} />;
});

export default PinInput;

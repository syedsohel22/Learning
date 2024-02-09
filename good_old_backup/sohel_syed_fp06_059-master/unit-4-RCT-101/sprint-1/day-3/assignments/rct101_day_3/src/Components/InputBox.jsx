import React, { useState } from "react";

const InputBox = () => {
  const [textIn, setTextIn] = useState("");
  const handleInputClear = () => {
    setTextIn("");
  };
  const handleInputText = (e) => {
    setTextIn(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>REACT - INPUT BOX</h1>
      <input value={textIn} onChange={handleInputText} />
      <h1>{textIn}</h1>
      <button onClick={handleInputClear}>Clear</button>
    </div>
  );
};

export default InputBox;

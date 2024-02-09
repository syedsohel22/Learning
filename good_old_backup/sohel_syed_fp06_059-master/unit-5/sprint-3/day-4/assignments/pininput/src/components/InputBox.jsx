import React, { useState } from "react";
import Box from "./Box";
const InputBox = ({ length, handleOtp }) => {
  const [val, setVal] = useState(new Array(length).fill(""));
  return (
    <div>
      {val.map((e, i) => (
        <Box key={i} />
      ))}

      {/* <input type="text" maxLength={1} style={style} />
      <input type="text" maxLength={1} style={style} />
      <input type="text" maxLength={1} style={style} /> */}
    </div>
  );
};

export default InputBox;

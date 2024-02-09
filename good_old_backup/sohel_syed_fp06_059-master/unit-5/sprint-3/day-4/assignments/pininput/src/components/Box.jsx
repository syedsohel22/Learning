import React from "react";
const style = {
  padding: 10,
  width: 15,
  fontSize: 20,
  margin: 5,
};
const Box = () => {
  const handle = () => {};
  return (
    <div>
      <input type="text" maxLength={1} style={style} onKeyUp={handle} />
    </div>
  );
};

export default Box;

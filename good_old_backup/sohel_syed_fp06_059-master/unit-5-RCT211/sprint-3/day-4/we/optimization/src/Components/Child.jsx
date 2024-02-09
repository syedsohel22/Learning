import React, { memo } from "react";

const Child = ({ count, magicFunc }) => {
  const colors = ["teal", "red", "yellow", "green", "black", "blue"];

  function returnColor() {
    return colors[Math.floor((Math.random() * 10) / 2)];
  }
  return (
    <div>
      <button
        onClick={() => magicFunc()}
        style={{ backgroundColor: `${returnColor()}` }}
      >
        {count}
      </button>
    </div>
  );
};

export default memo(Child);

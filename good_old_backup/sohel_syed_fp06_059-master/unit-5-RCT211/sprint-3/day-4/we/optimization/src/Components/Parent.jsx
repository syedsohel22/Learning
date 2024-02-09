import React, { useCallback, useState } from "react";
import useTimer from "./../hooks/useTimer";
import Child from "./Child";

const Parent = () => {
  const { time } = useTimer();

  const [count, setCount] = useState(0);

  const magicFunc = useCallback(() => {
    setCount((c) => c + 1);
    console.log("rereand");
  }, []);
  return (
    <div>
      <button>Timer Parent:{time}</button>
      <Child count={count} magicFunc={magicFunc} />
    </div>
  );
};

export default Parent;

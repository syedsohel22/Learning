import React from "react";
import useDebounce from "./useDebounce";

const ClcikMe = () => {

  const handleClick = () => {



    
    console.log("req made");
  };
  const debounce = useDebounce(handleClick, 1500);
  return (
    <div>
      <button onClick={debounce}>Click me</button>
    </div>
  );
};

export default ClcikMe;

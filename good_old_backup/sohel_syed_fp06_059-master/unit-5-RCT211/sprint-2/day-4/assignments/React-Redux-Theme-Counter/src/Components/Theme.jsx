import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../Redux/action";

// const light = {
//   color: "black",
//   backgroundColor: "white",
// };

// const dark = {
//   color: "white",
//   backgroundColor: "black",
// };
const Theme = () => {
  const theme = useSelector((theme) => {
    return theme.theme.theme;
  });
  const dispatch = useDispatch();

  //dark
  const handleDark = () => {
    dispatch(handleTheme("dark"));
  };

  //light
  const handleLight = () => {
    dispatch(handleTheme("light"));
  };
  return (
    <div>
      <button disabled={theme === "light"} onClick={handleLight}>
        Switch to Light
      </button>
      <button disabled={theme === "dark"} onClick={handleDark}>
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;

import { useState } from "react";
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  const toggleDarkMode = () => {
    setIsDarkMode((p) => !p);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;

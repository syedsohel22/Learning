import React, { useState } from "react";
import data from "../db.json";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import User from "./User";
export const Dashboard = () => {
  // const [theme, setTheme] = useState;
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  console.log(data);

  const selectTheme = (e) => {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  };
  return (
    <div
      data-testid="dashboard-cont"
      style={{
        background: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
        padding: "10px",
      }}
    >
      <select data-testid="select-theme" onChange={selectTheme}>
        <option>Light Theme</option>
        <option>Dark Theme</option>
      </select>
      {/* map through the users and render User component */}
      {data.map((el) => (
        <User
          key={el.id}
          name={el.name}
          position={el.position}
          level={el.level}
          points={el.points}
          img={el.img}
          isDarkTheme={isDarkTheme}
        />
      ))}
    </div>
  );
};

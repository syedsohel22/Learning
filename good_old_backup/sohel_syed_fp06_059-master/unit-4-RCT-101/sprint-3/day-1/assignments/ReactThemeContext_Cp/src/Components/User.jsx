import React from "react";

export default function User({
  name,
  position,
  level,
  points,
  img,
  id,
  isDarkTheme,
}) {
  return (
    <div
      data-testid="user"
      style={{
        background: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
        padding: "10px",
      }}
    >
      <img src={img} alt={name} />
      <p>{name}</p>
      <input
        data-testid="level"
        type="range"
        name={level}
        style={{ accentColor: isDarkTheme ? "yellow" : "blue" }}
      />
      <p>{position}</p>
      <p>{points}</p>
    </div>
  );
}

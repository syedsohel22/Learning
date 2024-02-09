import React from "react";

// const user = {
//   name: "Sohel Syed",
//   imgurl: "https://avatars.githubusercontent.com/u/83800834?v=4",
//   id: "1",
// };

const ConditionalRender = (props) => {
  const { src, name, rounded, hideName } = props;
  const styles = {
    borderRadius: rounded ? "50%" : "1rem",
    border: "10px solid Black",
    width: "400px",
  };
  return (
    <div>
      
      <img src={src} alt={name} style={styles} rounded={rounded} />
      <h3>{hideName ? name : null}</h3>
    </div>
  );
};

export default ConditionalRender;

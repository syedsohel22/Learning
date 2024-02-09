import React from "react";

const styles = {
  borderRadius: "50%",
  border: "10px solid Black",
  width: "400px",
};

const user = {
  name: "Sohel Syed",
  imgurl: "https://avatars.githubusercontent.com/u/83800834?v=4",
  id: "1",
};
const Avatar = () => {
  return (
    <div>
      <h1>Avatar</h1>
      <img src={user.imgurl} alt={user.name} style={styles} />
      <h3>{user.name}</h3>
    </div>
  );
};

export default Avatar;

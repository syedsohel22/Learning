// Your code goes here
// do a default export
import React, { useState } from "react";

const UserCard = ({ avatar, posts, followers, address, name }) => {
  const [follow, setFollow] = useState(false);
  const handlefollow = () => {
    setFollow(!follow);
  };
  return (
    <div>
      <img src={avatar} alt={name} style={{ borderRadius: "50%" }} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <p data-testid="user_posts">{posts}</p>
      <p data-testid="user_followers">{followers}</p>
      <h3>Posts</h3>
      <h3>Followers</h3>
      <button onClick={handlefollow}>{follow ? "following" : "follow"}</button>
    </div>
  );
};

export default UserCard;

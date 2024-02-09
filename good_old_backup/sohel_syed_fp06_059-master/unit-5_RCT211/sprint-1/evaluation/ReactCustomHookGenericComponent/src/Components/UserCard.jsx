import React from "react";
import "./UserCard.css";

import propTypes from "prop-types";
const UserCard = ({
  imageURL,
  avatarShape = "round",
  name,
  description = "Testing Description",
  backgroundColor = "red",
  title,
}) => {
  // imageURL, avatarShape, name, description, backgroundColor and title
  return (
    <div data-testid="usercard" className={"usercard"}>
      <img src={imageURL} alt={name} />
      <h3>{title}</h3>
      <h3>{name}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default UserCard;
UserCard.propTypes = {
  name: propTypes.string.isRequired,
  title: propTypes.string,
  description: propTypes.string,
  avatarShape: propTypes.string,
  backgroundColor: propTypes.string,
};

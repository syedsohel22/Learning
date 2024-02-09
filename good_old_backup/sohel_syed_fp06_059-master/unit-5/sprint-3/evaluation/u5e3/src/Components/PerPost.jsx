import React from "react";
import "./CSS Files/PerPost.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { editPost } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const PerPost = ({ item }) => {
  //console.log(item);
  const dispatch = useDispatch();
  const handleLike = (id) => {
    dispatch(editPost(item.id, { Liked: !item.Liked }));
  };
  return (
    <div className="perPostWrapper" data-testid="perPostWrapper">
      <div className="perPostCard">
        <img src="https://via.placeholder.com/50/3a9f5" alt="profile" />
        <div className="postTitle">{item.title}</div>
      </div>
      <div
        data-testid="likePostDiv"
        className="likedIcons"
        onClick={handleLike}
      >
        {/* Render the icons based on the liked condition */}
        {item.liked ? (
          <FcLike data-testid="likedIcon" />
        ) : (
          <AiOutlineHeart data-testid="notLikedIcon" />
        )}
      </div>
    </div>
  );
};

export default PerPost;

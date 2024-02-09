import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/action";
import "./CSS Files/Post.css";
import PerPost from "./PerPost";

const Posts = () => {

  return (
    <div className="postsWrapper">
      <div style={{ position: "relative" }}>
        <h1 style={{ textAlign: "center" }}>Posts</h1>
      </div>
      {/* map through the posts here, inside the PerPost component. Also, take care of showing the Posts based on the Pagination data */}
    </div>
  );
};

export default Posts;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../Redux/action";
import "./CSS Files/Post.css";
import PerPost from "./PerPost";

const Posts = () => {
  // let arr = [1, 2, 3];
  // console.log(0, ...arr);
  //console.log(process.env.REACT_APP_JSON_SERVER_PORT);
  const dispatch = useDispatch();
  const postList = useSelector((store) => store.posts);
   console.log(postList);
  useEffect(() => {
    if (postList.length === 0) {
      dispatch(getPosts());
    }
  }, [dispatch, postList.length]);
  return (
    <div className="postsWrapper">
      <div style={{ position: "relative" }}>
        <h1 style={{ textAlign: "center" }}>Posts</h1>
      </div>
      {/* map through the posts here, inside the PerPost component. Also, take care of showing the Posts based on the Pagination data */}
      {postList.length > 0 &&
        postList.map((item) => {
          return <PerPost key={item.id} item={item} />;
        })}
    </div>
  );
};

export default Posts;

import React, { useState } from "react";
import "./CSS Files/AddPost.css";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../Redux/action";
export const AddPost = () => {
  const [textData, setTextData] = useState("");
  console.log(textData);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addPosts(textData));
  };
  const handleChange = (e) => {
    setTextData(e.target.value);
  };
  return (
    <div className="addPostWrapper">
      <textarea
        className="addPostTextArea"
        cols="40"
        rows="3"
        maxLength="20"
        placeholder="What's happening?"
        data-testid="addTextArea"
        onChange={handleChange}
        value={textData}
      ></textarea>
      <div className="addPostBtnWrapper">
        <button
          data-testid="addPostBtn"
          className="addPostBtn"
          onClick={handleAdd}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

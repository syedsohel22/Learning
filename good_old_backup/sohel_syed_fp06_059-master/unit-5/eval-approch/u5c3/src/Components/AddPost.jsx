import React from "react";
import "./CSS Files/AddPost.css";

export const AddPost = () => {


  return (
    <div className="addPostWrapper">
      <textarea
        className="addPostTextArea"
        cols="40"
        rows="3"
        maxLength="20"
        placeholder="What's happening?"
        data-testid='addTextArea'
      ></textarea>
      <div className="addPostBtnWrapper">
        <button data-testid='addPostBtn' className="addPostBtn" >
          Tweet
        </button>
      </div>
    </div>
  );
};

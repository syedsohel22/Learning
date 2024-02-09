import React, { useState } from "react";
import api from "./../components/api";

const Addpost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [device, setDevice] = useState("");
  const [likes, setLikes] = useState("");

  const handleAdd = () => {
    const payload = {
      title,
      body,
      device,
      likes,
    };
    fetch(`${api}/posts/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        name="title"
        value={title}
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        name="body"
        value={body}
        placeholder="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <input
        name="device"
        value={device}
        placeholder="device"
        onChange={(e) => {
          setDevice(e.target.value);
        }}
      />
      <input
        name="likes"
        value={likes}
        placeholder="likes"
        onChange={(e) => {
          setLikes(e.target.value);
        }}
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default Addpost;

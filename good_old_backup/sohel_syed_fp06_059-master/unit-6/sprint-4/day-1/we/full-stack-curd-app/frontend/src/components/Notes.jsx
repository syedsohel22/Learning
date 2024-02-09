import { useState } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const handleaddNote = () => {
    const payload = {
      title,
      body,
      category,
    };

    fetch("http://localhost:8080/note/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      res
        .json()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    setBody("");
    setCategory("");
    setTitle("");
  };
  return (
    <div>
      <h3>Add a new Note</h3>
      <div>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <br />
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
        />
        <button onClick={handleaddNote}>Add</button>
      </div>
    </div>
  );
};

export default Notes;

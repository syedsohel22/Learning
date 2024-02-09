import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/note", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2>Your all notes</h2>
      <div>
        {data.length > 0 &&
          data.map((el) => {
            return <NoteCard key={el._id} {...el} />;
          })}
      </div>
    </div>
  );
};

export default Home;

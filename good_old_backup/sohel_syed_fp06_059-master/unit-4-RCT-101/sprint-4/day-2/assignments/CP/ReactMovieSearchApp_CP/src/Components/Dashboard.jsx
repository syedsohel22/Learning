import React from "react";
import { useState, useEffect } from "react";

const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`;

const initalState = {
  name: "",
};
export default function Dashboard() {
  const [state, setState] = useState(initalState);
  const [movies, setMovies] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const getData = (state) => {
    fetch(`${URL}?q=${state.name}`)
      .then((res) => res.json())
      .then((res) => setMovies(res));
  };
  useEffect(() => {
    console.log(process.env.REACT_APP_JSON_SERVER_PORT);
    const id = setTimeout(() => {
      getData(state);
    }, 1000);
    const cleanUp = () => {
      clearTimeout(id);
    };
    return cleanUp;
  }, [state]);
  return (
    <div>
      <input
        style={{ padding: "5px", margin: "10px", width: 200 }}
        type="text"
        name="name"
        data-testid="search_key"
        placeholder="Search Movie Username"
        onChange={handleChange}
      />
      <div data-testid="movie_results">
        {/* Add movie results based of search key here */}
        {movies.map((el) => (
          <div
            key={el.id}
            style={{
              border: "1px solid black",
              widht: "20%",
              display: "flex",
              // flexDirection: "coloum",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <h3>Title:{el.title}</h3>
            <h3>year:{el.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

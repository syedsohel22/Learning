import React, { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import BookCard from "./components/BookCard";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button
        data-testid="toggle-btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "Show Fictional Books" : "Show Non-Fiction Books"}
      </button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */
        }

        {toggle ? <NonFiction /> : <Fiction />}
        {/* <BookCard /> */}
      </div>
    </div>
  );
}

export default App;

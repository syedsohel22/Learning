import React, { useState, useEffect } from "react";
import "./App.css";
const initState = {
  name: "",
  imgURL: "",
  price: "",
};
function App() {
  const [formstate, setFromState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFromState(e.target.value);
    console.log(formstate);
  };
  return (
    <div className="App">
      <form>
        <label>
          Product Name
          <input name="product-name" onChange={handleChange} />
        </label>
        <br />
        <br />
        product image
        <label name="product-img_url" onChange={handleChange}>
          <input />
        </label>
        <br />
        <br />
        <label>
          Price
          <input onChange={handleChange} />
        </label>
        <br />
        <br />
        <input type="submit" value="create product"></input>
      </form>
    </div>
  );
}

export default App;

import Card from "./Card";
import React, { useState } from "react";
const initState = {
  name: "",
  height: 0,
  weight: 0,
  power: 0,
};
const InputTags = () => {
  //   const [name, setName] = useState("");
  //   const [height, setHeight] = useState(0);
  //   const [weight, setWeight] = useState(0);
  //   const [power, setPower] = useState(0);
  const [allHero, setAllHero] = useState([]);
  const [state, setState] = useState(initState);
  const [mostpowerhero, setmostpowerHero] = useState([]);
  const [showingmaxHero, setShowingMaxHero] = useState(false);

  //   const handleName = (e) => {
  //     setName(e.target.value);
  //   };
  //   const handleHeight = (e) => {
  //     setHeight(e.target.value);
  //   };
  //   const handleWeight = (e) => {
  //     setWeight(e.target.value);
  //   };
  //   const handlePower = (e) => {
  //     setPower(e.target.value);
  //   };
  // console.log();

  const handleChange = (e) => {
    let { name } = e.target;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const handleAddSuperHero = (e) => {
    e.preventDefault();
    setAllHero([...allHero, state]);
    setState(initState);
  };

  function handlemostpowerHero() {
    var maxVal = Number.MIN_VALUE;
    let mostpower;
    for (let i = 0; i < allHero.length; i++) {
      if (allHero[i].power > maxVal) {
        maxVal = allHero[i].power;
        mostpower = allHero[i];
      }
    }
    setmostpowerHero([...mostpowerhero, mostpower]);
    setShowingMaxHero(true);
  }
  const showAll = () => {
    mostpowerhero.length = 0;
    setShowingMaxHero(false);
  };
  return (
    <>
      <form>
        <input
          data-testid="input-name"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          data-testid="input-height"
          type="text"
          name="height"
          value={state.height}
          onChange={handleChange}
        />
        <input
          data-testid="input-weight"
          type="text"
          name="weight"
          value={state.weight}
          onChange={handleChange}
        />
        <input
          data-testid="input-power"
          type="text"
          name="power"
          value={state.power}
          onChange={handleChange}
        />
        <button
          data-testid="add-button"
          disabled={state == initState}
          onClick={handleAddSuperHero}
        >
          Add SuperHero
        </button>
      </form>
      <button
        data-testid="most-powerfull"
        disabled={allHero.length < 2}
        onClick={handlemostpowerHero}
      >
        Most Powerful Superhero
      </button>
      <button data-testid="all-superheroes" onClick={showAll}>
        Show All
      </button>
      <Card data={showingmaxHero ? mostpowerhero : allHero} />
    </>
  );
};

export default InputTags;

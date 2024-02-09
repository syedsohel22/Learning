import { useState } from "react";

const useToggleItems = (arr, n) => {
  const [one, setOne] = useState(0);

  console.log("top", state);
  if (n === undefined) {
    n = 0;
  }
  //   for (let i = 0; i < arr.length; i++) {
  //     state = arr[i];
  //   }
  function toggleState() {
    setOne((prev) => prev + 1);
    return state;
  }
  let state = arr[one];
  console.log(state);
  return [state, toggleState];
};

export { useToggleItems };

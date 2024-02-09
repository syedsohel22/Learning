import { useState } from "react";

const useToggleItems = (list, index = 0) => {
  const [state, setState] = useState(list);
  const [val, setVal] = useState(index);

  function handleToggle() {
    if (val === state.length - 1) {
      setVal(0);
    } else {
      setVal(val + 1);
    }
  }

  return [state[val], handleToggle];
};

export { useToggleItems };

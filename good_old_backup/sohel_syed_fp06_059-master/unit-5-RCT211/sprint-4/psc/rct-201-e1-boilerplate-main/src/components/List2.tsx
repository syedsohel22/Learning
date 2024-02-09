import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  list: number[];
};
const List2 = (props: List2Props) => {
  const [val, setval] = useState(0);
  const { list, appendEnd, popStart, clear, reset } = useNumberList(props.list);
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">
        {/* Label */}
        List 2
      </h3>
      {list.map((e, i) => (
        <div data-testid="list2-element" key={i}>
          {e}
        </div>
      ))}
      {/* Iterate List and wrap the element div below inside */}

      <input
        data-testid="list2-input"
        onChange={(e) => setval(Number(e.target.value))}
      />
      <button data-testid="list2-btn-append-end" onClick={() => appendEnd(val)}>
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={popStart}>
        {/* Button to  pop first element of the list */}pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={clear}>
        {/* Button to  clear the list */}clear
      </button>
      <button data-testid="list2-btn-reset" onClick={reset}>
        {/* Button to  reset the list to initialValue */}reset
      </button>
    </div>
  );
};

export default List2;

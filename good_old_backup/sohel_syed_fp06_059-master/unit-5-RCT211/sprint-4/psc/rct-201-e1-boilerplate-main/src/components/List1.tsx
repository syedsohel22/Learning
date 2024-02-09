import React, { useState } from "react";
import useNumberList from "./../hooks/useNumberList";

type List1Props = {
  // TODO
  list: number[];
};
const List1 = (props: List1Props) => {
  const [val, setval] = useState(0);
  const { list, appendStart, popEnd, clear, reset } = useNumberList(props.list);

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">LIst 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      {list.map((e, i) => (
        <div data-testid="list1-element" key={i}>
          {e}
        </div>
      ))}

      <input
        data-testid="list1-input"
        onChange={(e) => setval(Number(e.target.value))}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => appendStart(val)}
      >
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={popEnd}>
        {/* po last element btn */}
        pop end
      </button>
      <button data-testid="list1-btn-clear" onClick={clear}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={reset}>
        {/* Reset list to default value btn */}reset
      </button>
    </div>
  );
};

export default List1;

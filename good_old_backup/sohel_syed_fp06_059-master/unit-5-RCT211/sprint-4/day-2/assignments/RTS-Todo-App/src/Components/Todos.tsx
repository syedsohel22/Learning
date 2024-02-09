import React from "react";
import Todo from "./Todo";
import { Todoobj } from "./Add";
function Todos() {
  let data = localStorage.getItem("todo");
  // if (data !== null) {
  //   data = JSON.parse(localStorage.getItem("todo"));
  // }
  console.log(data);
  return (
    <div>
      {/* All Todos Should be shown here  */}
      {data &&
        data.map((el: Todoobj) => {
          return <Todo key={el.id} />;
        })}
    </div>
  );
}

export default Todos;

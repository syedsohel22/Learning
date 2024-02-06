import axios from "axios";
import  { useEffect, useState } from "react";

const Todos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

  const fdata = data?.filter((el) => el.completed === false);
  console.log(fdata, "fileredata");
  return (
    <div>
      <div>
        {data?.map((el, i) => {
          return (
            <div key={i}>
              <p>{el.title}</p>
              <p>{el.completed}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;

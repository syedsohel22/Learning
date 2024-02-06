import axios from "axios";
import { useEffect, useState } from "react";

const Videopage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        console.log("inside");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return <div>Videopage</div>;
};

export default Videopage;

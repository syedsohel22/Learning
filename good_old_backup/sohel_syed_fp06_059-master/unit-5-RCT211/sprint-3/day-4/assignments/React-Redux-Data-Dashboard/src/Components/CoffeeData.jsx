import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffeeData } from "../Redux/AppReducer/action";

export default function CoffeeData() {
  const dispatch = useDispatch();
  const Arr = useSelector((state) => {
    return state.coffeeData;
  });
  // console.log(Arr);
  useEffect(() => {
    dispatch(getCoffeeData());
  }, []);
  return (
    <div>
      <h2>Coffee Data</h2>
      <div className="coffee_data_cont">
        {/* map the below div against your coffee data */}
        {Arr.length > 0 &&
          Arr.map((el) => {
            return (
              <div className="coffee-item" key={el.id}>
                <img className="image" alt="img" width="70%" src={el.image} />
                <div className="title">{el.title} </div>
                <div className="price"> {el.price}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

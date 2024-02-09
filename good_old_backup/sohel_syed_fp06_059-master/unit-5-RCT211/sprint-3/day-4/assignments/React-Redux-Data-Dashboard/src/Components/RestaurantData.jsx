import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const dispatch = useDispatch();
  const Arr = useSelector((state) => {
    return state.restaurantData;
  });
  console.log(Arr);
  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);
  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data_cont">
        {/* Map the below div against your restaurant Data */}
        {Arr.length > 0 &&
          Arr.map((el) => {
            return (
              <div className="restaurant_item" key={el.id}>
                <img className="image" alt="img" width="70%" src={el.image} />
                <div className="name">{el.name}</div>
                <div className="type">{el.type}</div>
                <div className="rating">{el.rating}</div>
                <div className="number_of_votes">{el.number_of_votes}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

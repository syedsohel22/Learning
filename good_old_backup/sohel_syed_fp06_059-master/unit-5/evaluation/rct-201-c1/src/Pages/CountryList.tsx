import React from "react";
import { Country } from "./Countries";

// should receive the countries list data, through the props, to be mapped and rendered
const CountryList = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      CountryList
      {data &&
        data.map((el: any) => {
          return (
            <p key={el.id}>
              name:{el.name} -- capital:{el.capital}
            </p>
          );
        })}
    </div>
  );
};

export default CountryList;

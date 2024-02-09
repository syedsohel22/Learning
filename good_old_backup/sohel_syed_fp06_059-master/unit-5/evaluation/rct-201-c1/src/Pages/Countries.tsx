import React, { useState, useEffect } from "react";
import { getCountriesAPI } from "../api";
import { addCountryDetailsAPI } from "./../api";
import CountryInput from "./CountryInput";
import CountryList from "./CountryList";

// should fetch the countries data, as soon as this component mounts

export interface Country {
  id: number;
  name: string;
  capital: string;
}
const Countries = () => {
  const [contriesData, setCountriesData] = useState<Country[]>([]);
  // have a local state management to store the countries data
  // console.log(contriesData);
  const handleGetCountries = () => {
    getCountriesAPI().then((res) => {
      setCountriesData(res);
    });
  };
  //should accept the country to be added, as a parameter
  const addCountryDetails = (payload: Country) => {
    addCountryDetailsAPI(payload).then((res) => {
      handleGetCountries();
    });
  };

  useEffect(() => {
    handleGetCountries();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Countries</h1>
      {/* Render CountryInput component, with addCountryDetails function as props */}
      <CountryInput addCountryDetails={addCountryDetails} />
      {/* Render CountryList component, with the countries data as props */}
      <CountryList data={contriesData} />
    </div>
  );
};

export default Countries;

import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";
import CountryInput from "./CountryInput";
// should fetch the countries data, as soon as this component mounts
const Countries = () => {
  // have a local state management to store the countries data
  const [countrydata, setCountryData] = useState<string[]>([]);

  //should accept the country to be added, as a parameter
  const addCountryDetails = () => {};

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Countries</h1>
      {/* Render CountryInput component, with addCountryDetails function as props */}
      <CountryInput />
      {/* Render CountryList component, with the countries data as props */}
      <CountryList />
    </div>
  );
};

export default Countries;

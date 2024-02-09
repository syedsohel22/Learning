import React, { useState } from "react";

// should receive the addCountryDetails callback function through props
const CountryInput = () => {
  // create a form, to take the country, and capital
  const [countryName, setCountryName] = useState<string>();
  const [capital, setCapital] = useState<string>();
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const handleCapitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapital(e.target.value);
  };

  //  when the user clicks on the Add Country Data button
  //  call the addCountryDetails function, inside this.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input type="text" value={countryName} onChange={handleCountryChange} />
        <input type="text" value={capital} onChange={handleCapitalChange} />
        <button onSubmit={handleSubmit}>Add Country</button>
      </form>
    </div>
  );
};

export default CountryInput;

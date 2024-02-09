import React, { useState } from "react";
import { Country } from "./Countries";

interface CountryInputProps {
  addCountryDetails: (paylaod: Country) => void;
}
// should receive the addCountryDetails callback function through props
const CountryInput = ({ addCountryDetails }: CountryInputProps) => {
  const [coutnryTitle, setCountryTitle] = useState<string>("");
  const [capital, setCapital] = useState<string>("");
  // create a form, to take the country, and capital

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryTitle(e.target.value);
  };

  const handleCapitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapital(e.target.value);
  };

  //  when the user clicks on the Add Country Data button
  //  call the addCountryDetails function, inside this.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (capital.length && coutnryTitle.length) {
      const payload: Country = { id: Date.now(), name: coutnryTitle, capital };
      addCountryDetails(payload);
      setCountryTitle("");
      setCapital("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Country"
          placeholder="Country"
          value={coutnryTitle}
          onChange={handleCountryChange}
        />
        <input
          type="text"
          name="capital"
          placeholder="Capital"
          value={capital}
          onChange={handleCapitalChange}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default CountryInput;

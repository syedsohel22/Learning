import axios from "axios";
// make a successful login request to the reqres.in API
export const loginAPI = async () => {
  let loginRes = await axios.post("https://reqres.in/api/login");
  return loginRes.data;
};

// make a request to get the list of countries from the db.json file, using JSON server
export const getCountriesAPI = async () => {
  let countryRes = await axios.get("http://localhost:8080/countries");
  return countryRes.data;
};

//make a request to add a country to the db.json file, using JSON server
export const addCountryDetailsAPI = async () => {
  let addCountry = await axios.post("http://localhost:8080/countries");
  return addCountry.data;
};

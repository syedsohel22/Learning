import React, { useEffect, useState } from "react";

import SearchResults from "./SearchResults";

export const fetchData = () => {
  // make fetch request to the mentioned api and return the result here
  return fetch(
    "https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1"
  )
    .then((res) => {
      // console.log(res.data);
      return res.json();
    })
    .catch((err) => console.log(err));
};

const initState = {
  source: "",
  destination: "",
};

function FlightSearch() {
  const [state, setState] = useState(initState);
  const [result, setResult] = useState([]);
  const [flag, setFlag] = useState(false);
  // on page load fetch the data (useEffect)
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let data = await fetchData();
      console.log("mydata=>", data);
      setData(data);
      setFlag(true);
    };
    getdata();
  }, []);

  const handleChange = (e) => {
    let { name } = e.target;
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    // filter the data based on source and destination

    let filterData = data.filter((el) => {
      return el.source == state.source && el.destination == state.destination;
    });

    setResult(filterData);
    setFlag(true);
    console.log(filterData);
  };

  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input
            data-testid="source-input"
            name="source"
            placeholder="Source"
            onChange={handleChange}
          />
          <br /> <br />
          <input
            data-testid="destination-input"
            placeholder="Destination"
            name="destination"
            onChange={handleChange}
          />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>
            Search
          </button>
        </section>
      </div>
      {result.length > 0 ? (
        <SearchResults props={result} />
      ) : (
        <div data-testid="no-flights" className="">
          No Flights Found
        </div>
      )}
    </div>
  );
}

export default FlightSearch;

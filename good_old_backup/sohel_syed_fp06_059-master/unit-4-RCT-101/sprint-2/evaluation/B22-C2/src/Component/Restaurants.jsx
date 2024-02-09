import React, { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
const fetchdata = async (page) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`
  ).then((res) => res.json());

  //console.log(res.data)
};

function Restaurants() {
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    getrestaurantsData(page);
  }, [page]);

  async function getrestaurantsData(page) {
    try {
      setLoader(true);
      let { data, totalPages } = await fetchdata(page);
      setLoader(false);
      setItem(data);
      setTotalPages(totalPages);
      // console.log(data);
      // console.log(page, totalPages);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  if (loader) {
    return <LoadingIndicator />;
  }
  //

  function handleClick(val) {
    setPage(val);
  //  getrestaurantsData(val);
    //fetchdata(val);
  }
  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
        {/* Restaurant Card */}
        {item.map((el) => (
          <RestaurantCard
            image={el.image}
            name={el.name}
            type={el.type}
            rating={el.rating}
            number_of_votes={el.number_of_votes}
            price_starts_from={el.price_starts_from}
            key={el.id}
          />
        ))}
      </div>
      <div>
        {/* Pagination Component */}
        <Pagination
          total={totalPages}
          handleClick={handleClick}
          current={page}
        />
      </div>
    </div>
  );
}

export default Restaurants;

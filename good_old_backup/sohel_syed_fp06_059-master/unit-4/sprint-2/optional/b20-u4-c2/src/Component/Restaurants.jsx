import LoadingIndicator from "./LoadingIndicator";
import React, { useEffect } from "react";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";

const getRestaurantsApi = async (page) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
  ).then((res) => res.json());
};

function Restaurants() {
  const [loader, setLoader] = React.useState(true);
  const [restaurants, setRestraurants] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null);

  useEffect(() => {
    getRestaurantsData(1);
  }, [page]);

  async function getRestaurantsData(page) {
    try {
      setLoader(true);
      let data = await getRestaurantsApi(page);
      setLoader(false);
      setRestraurants(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  function handleClick(val){

  }
  if(loader){
    return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
      {/* Restaurant Card */}
      {restaurants.map(e)=>(
        <RestaurantCard>
          image={e.image}
          name={e.name}
          number_of_votes={e.number_of_votes}
          Price_starts_from={e.price_starts_from}
          rating={e.rating}
          type={e.type}

        </RestaurantCard>
      )}
      </div>
      <div>{/* Pagination Component */}</div>
    </div>
  );
}

export default Restaurants;

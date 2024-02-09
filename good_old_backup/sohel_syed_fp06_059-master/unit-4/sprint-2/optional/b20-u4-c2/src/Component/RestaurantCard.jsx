import styles from "./RestaurantCard.module.css";
import LoadingIndicator from "./LoadingIndicator";
import React, { useEffect } from "react";
import Pagination from "./Pagination";

const getRestaurantsApi = async (page) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
  ).then((res) => res.json());
};

function RestaurantCard(props) {
  const [loader, setLoader] = React.useState(true);
  const [restaurant, setRestraurants] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalpages, setTotalPages] = React.useState(null);

  useEffect(() => {
    getRestaurantData(1);
  }, [page]);
  return (
    <div data-testid="restaurant-card" className={styles.container}>
      {/* display the props */}
    </div>
  );

  async function getRestaurantData(page) {
    try {
      setLoader(true);
      let { data, totalpages } = await getRestaurantsApi(page);

      setLoader(false);
      setRestraurants(data);
      setTotalPages(totalpages);
    } catch (error) {
      setLoader(false);
    }
  }
}

export default RestaurantCard;

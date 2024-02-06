import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import RestaurantCard from "../components/RestaurantCard";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/restaurants/")

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

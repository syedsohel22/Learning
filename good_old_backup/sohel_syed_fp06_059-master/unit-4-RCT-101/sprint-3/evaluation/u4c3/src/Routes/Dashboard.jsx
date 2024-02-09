import { useContext, useState, useEffect } from "react";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const { logout, authState } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [order, setOrder] = useState("asc");
  console.log(page, order);
  useEffect(() => {
    getData(page, order);
    console.log("inside useEffect", page, order);
  }, [page, order]);

  const getData = async (page, order) => {
    const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBy=${order}`;

    setLoading(true);

    console.log(page, products);
    try {
      let res = await fetch(url);
      let data = await res.json();
      setProducts(data.data);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //sorting
  const handleSorting = () => {
    console.log(order);
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logout} data-testid="logout-btn">
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button
          disabled={order === "asc"}
          onClick={handleSorting}
          data-testid="low-to-high"
        >
          Sort low to high
        </button>
        <button
          disabled={order === "desc"}
          onClick={handleSorting}
          data-testid="high-to-low"
        >
          Sort high to low
        </button>
      </div>
      <br />
      <br />
      <Pagination
        totalPage={totalPages}
        current={page}
        onChange={(value) => setPage(value)}
      />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Product Listing, remember to show loading indicator when API is loading */}

        {loading ? <Loader /> : <ProductList products={products} />}
      </div>
    </div>
  );
}

export default Dashboard;

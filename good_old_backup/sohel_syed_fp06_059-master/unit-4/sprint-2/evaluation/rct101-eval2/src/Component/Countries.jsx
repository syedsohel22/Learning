import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

function Countries() {
  const [loader, setLoader] = useState(false);
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      setLoader(true);
      const data = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=1&limit=10`
      ).then((res) => res.json());
      setCountries(data.data);
      console.log(data.data);
      setLoader(false);
    };
    fetchData();
  }, []);

  if (loader) {
    return <LoadingIndicator />;
  }

  // const handlepage
  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {countries.map((e) => (
          <CountriesCard country={e.country} population={e.population} />
        ))}
      </div>
      <div>
        {/* Pagination */}
        <Pagination 
          
        />
      </div>
    </div>
  );
}

export default Countries;

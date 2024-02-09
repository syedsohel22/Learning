import "./App.css";
import useFetch from "./hooks/useFtech";
import useTimer from "./hooks/useTimer";

function App() {
  const isReady = useTimer(3000);
  const { loading, data, error } = useFetch(
    "https://fakestoreapi.com/products/1"
  );
  console.log(data);
  
  return (
    <div className="App">
      <div>
        <h3>Custom Hook</h3>
        {isReady && "Ready"}
        {!isReady && "Not - Ready"}
      </div>
      <div>
        <div className="card-box">
          <img src={data?.image} alt={data?.title} width="200px" />
          <h6>{data?.title}</h6>
          <h6>{data?.price}</h6>
          <h6>{data?.description}</h6>
          <h6>{data?.category}</h6>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Register from "./pages/Register";
import axios from "axios";
function App() {
  axios.defaults.baseUrl = "http://localhost:4000";
  axios.defaults.withCredentials = true;
  return (
    <div className="bg-red-500">
      <Register />
    </div>
  );
}

export default App;

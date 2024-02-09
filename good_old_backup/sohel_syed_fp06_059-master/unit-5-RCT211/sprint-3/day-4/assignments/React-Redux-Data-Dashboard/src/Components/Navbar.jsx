import { Link } from "react-router-dom";
import { AllRoutes } from "../Routes/AllRoutes";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/coffee-data">Coffeedata</Link>
      <Link to="/employee-data"> EmployeeData</Link>
      <Link to="/restaurant-data">RestaurantData</Link>
      <AllRoutes />
    </div>
  );
}

export { Navbar };

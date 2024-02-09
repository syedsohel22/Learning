import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addpost from "./pages/Addpost";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addpost />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

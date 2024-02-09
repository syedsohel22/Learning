import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/signin";
import Login from "./components/Login";
import Notes from "./components/Notes";
import Home from "./components/Home";
function App() {
  return (
    <>
      <h1>Notes taking app</h1>
      <Routes>
        <Route path="/signup" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Notes />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1> 404 Page note found</h1>} />
      </Routes>
    </>
  );
}

export default App;

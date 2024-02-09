import InputBox from "./components/InputBox";
import "./App.css";
import { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <InputBox length={4} handleOtp={(val) => setOtp(val)} />
      {otp}
    </div>
  );
}

export default App;

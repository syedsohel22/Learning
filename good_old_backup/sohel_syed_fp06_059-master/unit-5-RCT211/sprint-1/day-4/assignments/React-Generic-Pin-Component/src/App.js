import { useState } from "react";
import "./App.css";
import { PinTab } from "./Components/PinTab";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div data-testid="app-component" className="App">
      {/* You can pass setOtp as a prop */}
      {/* <PinTab /> */}
      {/* Show the OTP entered by user below */}
      <h3 data-testid="otp">OTP: {otp}</h3>
    </div>
  );
}

export default App;

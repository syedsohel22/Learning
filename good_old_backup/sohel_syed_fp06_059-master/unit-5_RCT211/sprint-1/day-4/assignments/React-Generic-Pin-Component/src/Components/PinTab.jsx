import React from "react";
import { Pin } from "./Pin";

export const PinTab = ({ length, maxChar, setOtp }) => {
  return (
    <div data-testid="pin-tab">
      {/* Add Pin component here  */}
      <Pin maxChar={1} />
    </div>
  );
};

// Check length and maxChar props here

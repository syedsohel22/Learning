import { useRef } from "react";
import { useState, useEffect } from "react";

const useThrottle = (value, delay = 3000) => {
  const [throttleValue, setThrottleValue] = useState("");

  const throttleId = useRef(false);

  useEffect(() => {
    if (!throttleId.current) {
      throttleId.current.true;
      setTimeout(() => {
        throttleId.current = false;
        setThrottleValue(value);
      }, delay);
    }
  }, [delay, value]);

  return throttleValue;
};

export default useThrottle;

import React, { useEffect, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setTime((p) => p + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return { time };
};

export default useTimer;

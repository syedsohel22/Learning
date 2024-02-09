import React, { useEffect, useState } from "react";

const useTimer = (dealy) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setReady(true), dealy);
    return () => clearTimeout(timer);
  }, []);
  return ready;
};

export default useTimer;

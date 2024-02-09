import { useEffect, useState } from "react";

const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, delay);
    return () => {};
  }, [delay]);

  return { ready };
};

export default useTimeout;

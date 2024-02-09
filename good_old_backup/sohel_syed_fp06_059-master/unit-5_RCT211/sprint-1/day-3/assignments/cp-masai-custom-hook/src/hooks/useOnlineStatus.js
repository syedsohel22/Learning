import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    if (navigator.onLine) {
      setOnline(true);
    }
    return () => {};
  }, []);

  return { online };
};

export default useOnlineStatus;

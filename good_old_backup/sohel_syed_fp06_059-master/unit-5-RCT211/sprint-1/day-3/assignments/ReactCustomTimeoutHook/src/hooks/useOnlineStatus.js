import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {

    if (navigator.onLine) {
      
      setIsUserOnline(true);
    }
  }, []);

  return { isUserOnline };
};

export default useOnlineStatus;

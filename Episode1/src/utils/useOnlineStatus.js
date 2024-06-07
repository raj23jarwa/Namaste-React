import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  
  const handleOnline = () => {
    console.log("Went online");
    setOnlineStatus(true);
  };
  const handleOffline = () => {
    console.log("Went offline");
    setOnlineStatus(false);
  };
  
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
     // Cleanup event listeners on unmount
     return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;

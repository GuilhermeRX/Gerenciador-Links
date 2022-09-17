import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const contextValue = {
    userInfo,
    setUserInfo,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
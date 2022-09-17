import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const fontColors = {
    primary: '#AEAEAE',
    secondary: '#0F1527',
    btn: '#FFFFFF',
  }

  const colors = {
    background: '#F5F5F5',
    highlight: '#4CA7A8',
    tertiary: '#E9F4F5',
    input: '#FAFAFA'
  }

  const contextValue = {
    userInfo,
    setUserInfo,
    colors,
    fontColors,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
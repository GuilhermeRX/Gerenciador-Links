import { useState } from "react";
import { requestData, setToken } from "../services/fetchAPI";
import { notifyError } from "../services/notify";
import AppContext from "./AppContext";

export default function AppProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  const [editLabel, setEditLabel] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [editId, setEditId] = useState(0);

  const fontColors = {
    primary: '#AEAEAE',
    secondary: '#0F1527',
    tertiary: '#B4BAC5',
    btn: '#FFFFFF',
  };

  const colors = {
    background: '#F5F5F5',
    highlight: '#4CA7A8',
    tertiary: '#E9F4F5',
    input: '#FAFAFA'
  };

  const handleList = async () => {
    if(localStorage.token) {
      const { token } = JSON.parse(localStorage.getItem('token'));
      setToken(token);
      const response = await requestData('/link');
  
      if (response.error) {
        return notifyError(`Error: ${response.error}`)
      }
      setList(response);
    }
  }

  const contextValue = {
    userInfo,
    setUserInfo,
    colors,
    fontColors,
    list,
    setList,
    modal,
    setModal,
    editUrl,
    setEditUrl,
    editLabel,
    setEditLabel,
    editId,
    setEditId,
    handleList,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}
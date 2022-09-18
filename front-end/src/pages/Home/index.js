import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { requestData, setToken } from '../../services/fetchAPI';

export default function Home() {
  const { userInfo, setUserInfo } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    async function handleUser() {
      if (localStorage.token) {
        const { token } = JSON.parse(localStorage.getItem('token'));
        setToken(token);
        const response = await requestData('/user/info')
        if (response.error) {
          return navigate('/')
        }
        return setUserInfo(response);
      }
      return navigate('/');
    };
    handleUser();
  }, [])

  return (
    <div>
      home
    </div>
  )
};
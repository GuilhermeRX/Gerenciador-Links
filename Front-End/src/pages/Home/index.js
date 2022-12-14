import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import FormAddLink from '../../Components/FormAddLink';
import Header from '../../Components/Header';
import LinkList from '../../Components/LinkList';
import Modal from '../../Components/Modal';
import AppContext from '../../context/AppContext';
import { requestData, setToken } from '../../services/fetchAPI';
import { PageHome } from './style';

export default function Home() {
  const { setUserInfo, colors } = useContext(AppContext)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageHome colors={colors}>
      <Header />
      <FormAddLink />
      <LinkList />
      <Modal />
      <ToastContainer />
    </PageHome>
  )
};
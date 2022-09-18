import { useContext, useState } from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import AppContext from "../../context/AppContext";
import { requestData, setToken } from "../../services/fetchAPI";
import { notifyError } from "../../services/notify";
import { Link, List, ListContainer } from "./style";
export default function LinkList() {
  const { fontColors, colors, list, setList } = useContext(AppContext)

  const handleList = async () => {
    const { token } = JSON.parse(localStorage.getItem('token'));
    setToken(token);
    const response = await requestData('/link');

    if (response.error) {
      return notifyError(`Error: ${response.error}`)
    }

    setList(response);
  }

  useState(() => {
    handleList()
  }, [])


  return (
    <ListContainer fontColors={fontColors} colors={colors}>
      <span>Gerencie seus links.</span>
      <List>
        {list.map((obj, index) => (
          <Link fontColors={fontColors} colors={colors} key={index}>
            <span>Site da Globo</span>
            <p>www.globo.com</p>
            <div>
              <AiOutlineEdit />
              <IoTrashOutline />
            </div>
          </Link>
        ))}
      </List>
    </ListContainer>
  )
}
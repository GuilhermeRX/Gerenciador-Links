import { useContext, useState } from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import AppContext from "../../context/AppContext";
import { requestData } from "../../services/fetchAPI";
import { Link, List, ListContainer } from "./style";
export default function LinkList() {
  const { fontColors, colors, list, setList } = useContext(AppContext)

  const handleList = async () => {
    const response = await requestData('/link')
    if (response.error) {
      return console.log(response.error);
    }
    setList(response);
  }

  const link = (
    <Link fontColors={fontColors} colors={colors}>
      <span>Site da Globo</span>
      <p>www.globo.com</p>
      <div>
        <AiOutlineEdit />
        <IoTrashOutline />
      </div>
    </Link>
  )

  useState(() => {
    handleList()
  }, [])


  return (
    <ListContainer fontColors={fontColors} colors={colors}>
      <span>Gerencie seus links.</span>
      <List>
        {list.map((obj) => link)}
      </List>
    </ListContainer>
  )
}
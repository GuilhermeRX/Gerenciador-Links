import { useContext, useState } from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import AppContext from "../../context/AppContext";
import { Link, List, ListContainer } from "./style";
export default function LinkList() {
  const {
    fontColors,
    colors,
    list,
    setEditLabel,
    setEditUrl,
    setEditId,
    handleList,
    setModal,
  } = useContext(AppContext)


  const handleEdit = (obj) => {
    setEditLabel(obj.label);
    setEditUrl(obj.url);
    setEditId(obj.id);

    setModal(true);
  }

  useState(() => {
    handleList()
  }, [])


  return (
    <ListContainer fontColors={fontColors} colors={colors}>
      <span>Gerencie seus links.</span>
      <List>
        {list.map((obj, index) => (
          <Link fontColors={fontColors} colors={colors} key={index} onClick={() => handleEdit(list[index])}>
            <span>{obj.label}</span>
            <p>{obj.url}</p>
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
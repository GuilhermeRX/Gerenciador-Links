import { useContext, useState } from "react";
import { IoTrashOutline } from 'react-icons/io5';
import AppContext from "../../context/AppContext";
import { deleteData } from "../../services/fetchAPI";
import { notifyTrash } from "../../services/notify";
import BtnCopy from "../Copy";
import { Link, List, ListContainer, NotLink, Title } from "./style";
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


  const handleEdit = (obj, target) => {
    if (target.className.includes?.('card-link')) {
      setEditLabel(obj.label);
      setEditUrl(obj.url);
      setEditId(obj.id);
      setModal(true);
    }
  }

  const handleDel = async (id) => {
    const response = await deleteData(`/link/${id}`);
    if (response.error) {
      return console.log(response.error);
    };
    notifyTrash('Removido com sucesso')
    handleList();
  }

  useState(() => {
    handleList();
  }, [])


  return (
    <ListContainer fontColors={fontColors} colors={colors}>
      <Title fontColors={fontColors} colors={colors}>Gerencie seus links.</Title>
      {list.length === 0 && <NotLink>Nenhum link cadastrado.</NotLink>}
      <List>
        {list.map((obj, index) => (
          <Link
            className="card-link"
            fontColors={fontColors}
            colors={colors} key={index}
            onClick={({ target }) => handleEdit(list[index], target)}
          >
            <span>{obj.label}</span>
            <p>{obj.url}</p>
            <div >
              <BtnCopy url={obj.url}/>
              <IoTrashOutline onClick={() => handleDel(obj.id)} />
            </div>
          </Link>
        ))}
      </List>
    </ListContainer>
  )
}
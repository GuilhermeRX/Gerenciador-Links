import { useContext, useState } from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import AppContext from "../../context/AppContext";
import { Link, List, ListContainer } from "./style";
export default function LinkList() {
  const [list, setList] = useState([]);

  const { fontColors, colors } = useContext(AppContext)
  return (
    <ListContainer fontColors={fontColors} colors={colors}>
      <span>Gerencie seus links.</span>
      <List>
        <Link fontColors={fontColors} colors={colors}>
          <span>Site da Globo</span>
          <p>www.globo.com</p>
          <div>
            <AiOutlineEdit />
            <IoTrashOutline />
          </div>
        </Link>
        <Link fontColors={fontColors} colors={colors}>
          <span>Site da Trybe</span>
          <p>www.trybe.com</p>
          <div>
            <AiOutlineEdit />
            <IoTrashOutline />
          </div>
        </Link>
      </List>
    </ListContainer>
  )
}
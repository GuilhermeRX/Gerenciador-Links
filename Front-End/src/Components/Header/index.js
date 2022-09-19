import { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import AppContext from "../../context/AppContext";
import Logo from "../Logo";
import { DivHeader, DivUserImg, UserContainer, UserInfo } from "./style";

export default function Header() {
  const { userInfo, fontColors, colors } = useContext(AppContext)
  return (
    <DivHeader colors={colors}>
      <Logo />
      <UserContainer>
        <UserInfo fontColors={fontColors}>
          <h4>Olá {userInfo.name}</h4>
          <p>{userInfo.email}</p>
        </UserInfo>
        <DivUserImg fontColors={fontColors}>
          <BiUserCircle />
        </DivUserImg>
      </UserContainer>
    </DivHeader>
  )
}
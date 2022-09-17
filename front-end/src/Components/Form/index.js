import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { BtnLogin, CrieSuaConta, FormContainer, InputText, Label } from "./style";

export default function Form() {
  const { colors, fontColors } = useContext(AppContext);
  return (
    <FormContainer colors={colors} fontColors={fontColors} >
      <Label htmlFor="email" fontColors={fontColors}>
        Email
        <InputText type='text' id='email' colors={colors} fontColors={fontColors} />
      </Label>

      <Label htmlFor="password" fontColors={fontColors}>
        Password
        <InputText type='password' id="password" colors={colors} fontColors={fontColors} />
      </Label>

      <BtnLogin colors={colors} fontColors={fontColors}>Entrar</BtnLogin>

      <CrieSuaConta fontColors={fontColors}>
        <p >Não tem conta?</p>
        <span>Crie agora</span>
      </CrieSuaConta>

    </FormContainer>
  );
}
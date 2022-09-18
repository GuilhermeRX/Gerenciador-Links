import { useContext, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import AppContext from "../../context/AppContext";
import { Btn, BtnBack, DivBtnCrieSuaConta, DivCreateUser, DivLogin, FormContainer, InputText, Label } from "./style";

export default function Form() {
  const { colors, fontColors } = useContext(AppContext);
  const [createDiv, setCreateDiv] = useState(false);

  const divLogin = (
    <DivLogin>
      <Label htmlFor="email" fontColors={fontColors}>
        Qual é o seu e-mail ?
        <InputText type='text' id='email' colors={colors} fontColors={fontColors} />
      </Label>

      <Label htmlFor="password" fontColors={fontColors}>
        Informe sua senha
        <InputText type='password' id="password" colors={colors} fontColors={fontColors} />
      </Label>

      <Btn colors={colors} fontColors={fontColors}>Entrar</Btn>

      <DivBtnCrieSuaConta fontColors={fontColors}>
        <p >Não tem conta?</p>
        <span onClick={() => setCreateDiv(true)}>Crie agora</span>
      </DivBtnCrieSuaConta>
    </DivLogin>
  );

  const createUser = (
    <DivCreateUser>
      <BtnBack fontColors={fontColors} onClick={() => setCreateDiv(false)}>
        <TiArrowBackOutline />
        Retornar
      </BtnBack>

      <Label htmlFor="nome" fontColors={fontColors}>
        Qual o seu nome ?
        <InputText type='text' id='nome' colors={colors} fontColors={fontColors} />
      </Label>

      <Label htmlFor="createEmail" fontColors={fontColors}>
        Qual é o seu e-mail ?
        <InputText type='text' id='createEmail' colors={colors} fontColors={fontColors} />
      </Label>

      <Label htmlFor="email" fontColors={fontColors}>
        Informe uma senha
        <InputText type='text' id='senha' colors={colors} fontColors={fontColors} />
      </Label>

      <Btn colors={colors} fontColors={fontColors}>Criar sua conta</Btn>
    </DivCreateUser>
  );

  return (
    <FormContainer colors={colors} fontColors={fontColors} >
      {createDiv ? createUser : divLogin}
    </FormContainer>
  );
}
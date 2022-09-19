import { useContext, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import AppContext from "../../context/AppContext";
import { requestLogin } from "../../services/fetchAPI";
import { notifyError, notifyRedirect } from "../../services/notify";
import { Btn, BtnBack, DivBtnCrieSuaConta, DivCreateUser, DivLogin, FormContainer, InputText, Label } from "./style";

export default function Form() {
  const { colors, fontColors } = useContext(AppContext);
  const [createDiv, setCreateDiv] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createName, setCreateName] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (endpoint, body) => {
    const response = await requestLogin(endpoint, body);
    if (response.error) {
      return notifyError(response.error);
    };
    localStorage.setItem('token', JSON.stringify(response));
    notifyRedirect()
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  };

  const divLogin = (
    <DivLogin>
      <Label htmlFor="email" fontColors={fontColors}>
        Qual é o seu e-mail ?
        <InputText
          type='text'
          id='email'
          colors={colors}
          fontColors={fontColors}
          value={loginEmail}
          onChange={({ target }) => setLoginEmail(target.value)}
        />
      </Label>

      <Label htmlFor="password" fontColors={fontColors}>
        Informe sua senha
        <InputText
          type='password'
          id="password"
          colors={colors}
          fontColors={fontColors}
          value={loginPassword}
          onChange={({ target }) => setLoginPassword(target.value)}
        />
      </Label>

      <Btn
        colors={colors}
        fontColors={fontColors}
        onClick={() => handleLogin('/login',
          { email: loginEmail, password: loginPassword })}
      >Entrar</Btn>

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
        <InputText
          type='text'
          id='nome'
          colors={colors}
          fontColors={fontColors}
          value={createName}
          onChange={({ target }) => setCreateName(target.value)}
        />
      </Label>

      <Label htmlFor="createEmail" fontColors={fontColors}>
        Qual é o seu e-mail ?
        <InputText
          type='text'
          id='createEmail'
          colors={colors}
          fontColors={fontColors}
          value={createEmail}
          onChange={({ target }) => setCreateEmail(target.value)}
        />
      </Label>

      <Label htmlFor="senha" fontColors={fontColors}>
        Informe uma senha
        <InputText
          type='password'
          id='senha'
          colors={colors}
          fontColors={fontColors}
          value={createPassword}
          onChange={({ target }) => setCreatePassword(target.value)}
        />
      </Label>

      <Btn
        colors={colors}
        fontColors={fontColors}
        onClick={() => handleLogin('/user',
          { name: createName, email: createEmail, password: createPassword })}
      >Criar sua conta</Btn>
    </DivCreateUser>
  );

  return (
    <FormContainer colors={colors} fontColors={fontColors} >
      {createDiv ? createUser : divLogin}
    </FormContainer>
  );
}
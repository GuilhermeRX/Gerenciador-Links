import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { createData } from "../../services/fetchAPI";
import { notifySuccess } from "../../services/notify";
import { Btn, InputText, Label } from "../Form/style";
import { ContainerForm } from "./style";

export default function FormAddLink() {
  const { fontColors, colors, userInfo, handleList } = useContext(AppContext)

  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');

  const handleAdd = async () => {
    const body = { url, label, userId: userInfo.id }
    const response = await createData('/link', body);
    if (response.error) {
      return console.log(response.error);
    };

    await handleList();
    notifySuccess('Adicionado com sucesso!')
  };

  return (
    <ContainerForm fontColors={fontColors} colors={colors}>
      <span>Adicione um novo link</span>
      <Label htmlFor="label" fontColors={fontColors}>
        Defina um label
        <InputText
          type='text'
          id='label'
          colors={colors}
          placeholder='Ex: Site da Trybe'
          value={label}
          onChange={({ target }) => setLabel(target.value)}
        />
      </Label>

      <Label htmlFor="url" fontColors={fontColors}>
        Digite ou cole a url
        <InputText
          type='text'
          id='url'
          colors={colors}
          placeholder='Ex: https://www.betrybe.com/'
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
      </Label>

      <Btn colors={colors} fontColors={fontColors} onClick={() => handleAdd()}>Adicionar</Btn>
    </ContainerForm>
  );
};
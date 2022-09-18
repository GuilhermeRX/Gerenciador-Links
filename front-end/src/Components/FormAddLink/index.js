import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Btn, InputText, Label } from "../Form/style";
import { ContainerForm } from "./style";

export default function FormAddLink() {
  const { fontColors, colors } = useContext(AppContext)

  const [label, setLabel] = useState('');
  const [url, setUrl] = useState('');

  return (
    <ContainerForm fontColors={fontColors} colors={colors}>
      <span>Adicione um novo link</span>
      <Label htmlFor="label" fontColors={fontColors}>
        Defina um label para sua url
        <InputText
          type='text'
          id='label'
          colors={colors}
        />
      </Label>

      <Label htmlFor="url" fontColors={fontColors}>
        Digite ou cole a url
        <InputText
          type='text'
          id='url'
          colors={colors}
        />
      </Label>

      <Btn colors={colors} fontColors={fontColors}>Adicionar</Btn>
    </ContainerForm>
  );
};
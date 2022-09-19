import { useContext } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AppContext from "../../context/AppContext";
import { updateData } from "../../services/fetchAPI";
import { notifySuccess } from "../../services/notify";
import { Btn, InputText, Label } from "../Form/style";
import { BtnClose, DivInputs, ModalContainer, ModalDiv } from "./style";

export default function Modal() {
  const { modal,
    colors,
    fontColors,
    setModal,
    editLabel,
    editUrl,
    setEditLabel,
    setEditUrl,
    editId,
    handleList,
  } = useContext(AppContext)

  const handleSave = async () => {
    const body = {
      url: editUrl,
      label: editLabel,
    }
    const response = await updateData(`/link/${editId}`, body);
    if (response.error) {
      return console.log(response.error);
    };
    await handleList();
    notifySuccess('Alteração realizada com sucesso!')
    setModal(false);
  };

  return (
    <ModalContainer state={modal ? 'flex' : 'none'}>
      <ModalDiv colors={colors} fontColors={fontColors}>
        <BtnClose colors={colors} fontColors={fontColors} onClick={() => setModal(false)}>
          <AiOutlineCloseCircle />
        </BtnClose>
        <span>Faça suas edições</span>

        <DivInputs>
          <Label fontColors={fontColors} htmlFor='editLabel'>
            Label
            <InputText
              type='text'
              colors={colors}
              id='editLabel'
              value={editLabel}
              onChange={({ target }) => setEditLabel(target.value)}
            />
          </Label>

          <Label fontColors={fontColors} htmlFor='editUrl'>
            Url
            <InputText
              type='text'
              colors={colors}
              id='editUrl'
              value={editUrl}
              onChange={({ target }) => setEditUrl(target.value)}
            />
          </Label>
        </DivInputs>

        <Btn
          colors={colors}
          fontColors={fontColors}
          onClick={() => handleSave()}
        >
          Salvar
        </Btn>
      </ModalDiv>
    </ModalContainer>
  )
}
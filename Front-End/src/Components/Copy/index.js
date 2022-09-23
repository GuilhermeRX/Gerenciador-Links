import clipboardCopy from 'clipboard-copy';
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { notifyCopy } from "../../services/notify";
import { CopyContainer } from "./style";

export default function BtnCopy(props) {
  const { colors, fontColors } = useContext(AppContext)

  const handleCopy = () => {
    clipboardCopy(props.url);
    notifyCopy('Copiado com sucesso !')
  };
  
  return(
    <CopyContainer colors={colors} fontColors={fontColors}>
      <button
      type="button" 
      colors={colors}
      onClick={() => handleCopy()}
      >Copiar Url
      </button>
    </CopyContainer>
  )
}
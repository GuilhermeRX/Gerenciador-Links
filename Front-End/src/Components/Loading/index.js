import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { LoadingContainer, Spinner } from "./style";

export default function Loading() {
  const {colors} = useContext(AppContext);
  return(
    <LoadingContainer>
      <Spinner colors={ colors }/>
    </LoadingContainer>
  )
}
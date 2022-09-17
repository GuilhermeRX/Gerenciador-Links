import { useContext } from "react";
import Form from "../../Components/Form";
import AppContext from "../../context/AppContext";
import { PageLogin } from "./style";

export default function Login() {
  const { colors, fontColors } = useContext(AppContext);
  console.log(colors, fontColors)
  return (
    <PageLogin colors={colors} fontColors={fontColors}>
      <Form />
    </PageLogin>
  )
};
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Form from "../../Components/Form";
import AppContext from "../../context/AppContext";
import { PageLogin } from "./style";

export default function Login() {
  const { colors, fontColors } = useContext(AppContext);
  console.log(colors, fontColors)
  return (
    <PageLogin colors={colors} fontColors={fontColors}>
      <ToastContainer />
      <Form />
    </PageLogin>
  )
};
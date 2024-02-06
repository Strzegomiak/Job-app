import { useNavigate } from "react-router-dom";
import { loginProps } from "../types/types";

const useLogin = () => {
  const navigate = useNavigate();
  // const [isLogged, setIsLogged] = useState(() => {
  //   const auth = localStorage.getItem("auth");
  //   return auth === "true" ? auth : null;
  // });
  // const [emailUser, setEmailUser] = useState(() => {
  //   const email = localStorage.getItem("emailUser");
  //   return email;
  // });
  const login = (user: loginProps) => {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("user");
  };
  return { login, logout };
};

export default useLogin;

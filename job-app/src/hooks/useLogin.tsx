import { useNavigate } from "react-router-dom";
import { IloginProps } from "../types/types";

const useLogin = () => {
  const navigate = useNavigate();

  const login = (user: IloginProps) => {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(user));
    console.log(JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return { login, logout };
};

export default useLogin;

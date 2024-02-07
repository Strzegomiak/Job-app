import { loginProps } from "../types/types";

const useLogin = () => {
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

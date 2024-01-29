import axios from "axios";
import { useState } from "react";

const useSign = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const registerUser = async (email: string, password: string, url: string) => {
    try {
      const res = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      console.log(res);
    } catch (ex: any) {
      console.log(ex);
      setErrorMessage(ex.response.data.error.message);
    }
  };
  return { errorMessage, registerUser };
};

export default useSign;

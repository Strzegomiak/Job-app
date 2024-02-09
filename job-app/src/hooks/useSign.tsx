import axios from "axios";
import { useState } from "react";

const useSign = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [logingReaction, setLogingReaction] = useState(false);
  const [registerReaction, setregisterReaction] = useState(false);
  const registerUser = async (
    email: string,
    password: string,
    url: string,
    operationType: string
  ) => {
    try {
      const res = await axios.post(url, {
        email,
        password,
        returnSecureToken: true,
      });
      if (operationType === "loging") {
        setLogingReaction(true);
      } else if (operationType === "register") {
        setregisterReaction(true);
      }
      console.log(res);
    } catch (ex: any) {
      console.log(ex);
      setErrorMessage(ex.response.data.error.message);
    }
  };
  return {
    errorMessage,
    registerUser,
    setErrorMessage,
    logingReaction,
    registerReaction,
  };
};

export default useSign;

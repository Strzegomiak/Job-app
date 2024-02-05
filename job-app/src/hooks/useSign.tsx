import axios from "axios";
import { useState } from "react";

const useSign = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // tutaj w try za console.log dać sprawdzenei czy to logowanie czy rejstrowanie (sprawdzenie linku ) i wykonanie dopowiednich flag.
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
  return { errorMessage, registerUser, setErrorMessage };
};

export default useSign;

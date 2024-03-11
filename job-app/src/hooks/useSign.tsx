import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const useSign = () => {
  const auth = getAuth();
  const [errorMessage, setErrorMessage] = useState("error");
  const [errorMessageSignUp, setErrorMessageSignUp] = useState("error");

  const navigate = useNavigate();

  const signIn = (email: string, password: string) => {
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrorMessage("");
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage("nieprawidolew dane logowania");
      });
  };
  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrorMessageSignUp("");
        navigate("/");
      })
      .catch((error: any) => {
        console.log(error.message);
        const errorMessageSlice = error.message.slice(16);
        setErrorMessageSignUp(errorMessageSlice);
      });
  };
  return { signUp, signIn, errorMessage, errorMessageSignUp };
};

export default useSign;

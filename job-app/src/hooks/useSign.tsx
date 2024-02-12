import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const useSign = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [logingReaction, setLogingReaction] = useState(false);
  const [registerReaction, setregisterReaction] = useState(false);
  // const registerUser = async (
  //   email: string,
  //   password: string,
  //   url: string,
  //   operationType: string
  // ) => {
  //   try {
  //     const res = await axios.post(url, {
  //       email,
  //       password,
  //       returnSecureToken: true,
  //     });
  //     if (operationType === "loging") {
  //       setLogingReaction(true);
  //     } else if (operationType === "register") {
  //       setregisterReaction(true);
  //     }
  //     console.log(res);
  //   } catch (ex: any) {
  //     console.log(ex);
  //     setErrorMessage(ex.response.data.error.message);
  //   }
  // };
  // return {
  //   errorMessage,
  //   registerUser,
  //   setErrorMessage,
  //   logingReaction,
  //   registerReaction,
  // };
  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      // .then((usercredential) => {
      // updateProfile(usercredential.user, {
      //   displayName: name,
      //   photoURL:
      //     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      // })
      .then(() => {})
      .catch((error) => {
        console.log("nie udalo sie zaktualizowac nazwy");
      });
  };
  return { signUp, signIn };
};

export default useSign;

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const useSetLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      console.log(user);
      if (user) {
        console.log(user);
        const currentUser: any = {
          email: user.reloadUserInfo.email,
          id: user.reloadUserInfo.localId,
        };
        setCurrentUser(currentUser);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return { isLogin, currentUser };
};
export default useSetLogin;

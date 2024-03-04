import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import logo from "../jobsLogo.png";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { IloginProps } from "../types/types";
import useSetLogin from "../hooks/useSetLogin";
import { onAuthStateChanged } from "firebase/auth";
import useSign from "../hooks/useSign";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { isLogin, currentUser } = useSetLogin();

  console.log(currentUser);

  console.log(isLogin, "currentU");

  const [isOpen, setIsOpen] = useState(false);
  const { login, logout } = useLogin();
  // const { signOut } = useSign();
  // const [logged, setLogged] = useState(false); < po co, niepotrzebne(?) bo wystarczy że mamy locaStorage puste jeśli chodzi o "user".
  const user: string | null = localStorage.getItem("user");
  const userJSON: IloginProps | null = user !== null ? JSON.parse(user) : null;
  const hangleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // logout();
    // setLogged(true);
    signOut(auth);
  };

  return (
    <nav className="flex m-4 justify-between w-11/12 py-8">
      <img className="h-8" src={logo}></img>
      <div onClick={hangleDrawer} className="hidden max-lg:block">
        <MenuIcon />
      </div>
      <TemporaryDrawer
        isOpen={isOpen}
        hangleDrawer={hangleDrawer}
        userJSON={userJSON}
        handleLogout={handleLogout}
      />
      <ul className="flex max-lg:hidden gap-10 max-lg:gap-5 text-gray-600">
        <li>
          <a>Jobs</a>
        </li>
        <li>
          <a>Companies</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        {isLogin === false ? (
          <div className="flex  gap-5 max-lg:gap-5 font-bold">
            <Link to={"/login"}>
              <li>
                <a>Login</a>
              </li>
            </Link>
            <Link to={"/register"}>
              <li>
                <a>Register</a>
              </li>
            </Link>
          </div>
        ) : (
          <div className=" flex gap-5 max-lg:gap-5 font-bold">
            <Link to={"/application"}>My application</Link>
            <h2>
              {currentUser.email} (
              <button onClick={handleLogout}>Log out</button>)
            </h2>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

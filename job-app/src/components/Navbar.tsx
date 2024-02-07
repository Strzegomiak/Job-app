import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import logo from "../jobsLogo.png";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login, logout } = useLogin();
  // const [logged, setLogged] = useState(false); < po co, niepotrzebne(?) bo wystarczy że mamy locaStorage puste jeśli chodzi o "user".
  const user: any = localStorage.getItem("user");
  const userJSON = user !== null ? JSON.parse(user) : null;
  console.log(userJSON);
  const hangleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    // setLogged(true);
  };
  return (
    <nav className="flex m-4 justify-between w-11/12 py-8">
      <img className="h-8" src={logo}></img>
      <div onClick={hangleDrawer} className="hidden max-lg:block">
        <MenuIcon />
      </div>
      <TemporaryDrawer isOpen={isOpen} hangleDrawer={hangleDrawer} />
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
        {userJSON === null ? (
          <div>
            <Link to={"/Login"}>
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
          <button onClick={handleLogout}>Log out</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

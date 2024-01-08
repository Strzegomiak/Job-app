import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import logo from "../jobsLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hangleDrawer = () => {
    setIsOpen((prev) => !prev);
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
        <li>
          <a>Login</a>
        </li>
        <Link to={"/register"}>
          <li>
            <a>Register</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

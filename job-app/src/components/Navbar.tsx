import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import TemporaryDrawer from "./TemporaryDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hangleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex m-4 justify-around">
      <h2>LOGO</h2>
      <div onClick={hangleDrawer} className="hidden max-md:block">
        <MenuIcon />
      </div>
      <TemporaryDrawer isOpen={isOpen} hangleDrawer={hangleDrawer} />
      <ul className="flex max-md:hidden gap-10 max-lg:gap-5">
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
        <li>
          <a>Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import * as React from "react";

import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function TemporaryDrawer(props: any) {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      props.hangleDrawer();
    };

  return (
    <Drawer onClose={toggleDrawer(false)} anchor={"top"} open={props.isOpen}>
      <ul className="items-center justify-center flex flex-col gap-10 max-lg:gap-5 m-10">
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
        {props.userJSON === null ? (
          <div className="items-center justify-center flex flex-col gap-5 max-lg:gap-5 font-bold">
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
          <div className="items-center justify-center flex flex-col gap-5 max-lg:gap-5 font-bold">
            <h2>{props.userJSON.email}</h2>
            <button onClick={props.handleLogout}>Log out</button>
          </div>
        )}
      </ul>
    </Drawer>
  );
}

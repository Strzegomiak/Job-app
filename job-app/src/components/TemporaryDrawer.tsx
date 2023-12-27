import * as React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
      <ul className="flex gap-10 max-lg:gap-5">
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
    </Drawer>
  );
}

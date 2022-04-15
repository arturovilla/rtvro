import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./css/Header.css";

function Header() {
  return (
    <div className="Header">
      <AppBar position="static">
        <Toolbar>
          <Typography>NAVBAR SHIT</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import "./css/Header.css";

function Header() {
  return (
    <Box className="Header_box">
      <AppBar position="static" className="Bar_">
        <Toolbar>
          <Typography>NAVBAR SHIT</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

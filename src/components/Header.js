import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import "./css/Header.css";

function Header() {
  return (
    <Box className="box1">
      <AppBar position="static" className="appb">
        <Box className="box2">
          <Toolbar className="toolb">
            <Button className="toolbutton" variant="outlined">
              image
            </Button>

            <Box className="box3">
              <Button className="toolbutton" variant="outlined">
                Home
              </Button>

              <Button className="toolbutton" variant="outlined">
                Skills
              </Button>

              <Button className="toolbutton" variant="outlined">
                Work
              </Button>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;

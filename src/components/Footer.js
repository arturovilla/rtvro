import { Email, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      Footer with links and shit
      <Box className="Iconbox">
        <Button href="https://www.linkedin.com/in/rtvro/">
          <LinkedIn className="Icons_" />
        </Button>

        <Button href="https://github.com/arturovilla">
          <GitHub className="Icons_" />
        </Button>

        <Button href="mailto:rturohouse@gmail.com">
          <Email className="Icons_" />
        </Button>

        <Button href="https://twitter.com/acvlobo">
          <Twitter className="Icons_" />
        </Button>
      </Box>
    </div>
  );
}

export default Footer;

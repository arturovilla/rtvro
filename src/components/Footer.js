import { Email, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="Footer">
      Footer with links and shit
      <Box className="Iconbox">
        <LinkedIn className="Icons_" />
        <GitHub className="Icons_" />
        <Email className="Icons_" />
        <Twitter className="Icons_" />
      </Box>
    </div>
  );
}

export default Footer;

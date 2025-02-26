import React from "react";
import { Box, Typography, styled } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(242, 238, 224, 0.77)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "10vh",
  width: "100%",
  padding: theme.spacing(2),
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter component="footer">
      <Typography variant="body2" sx={{ fontWeight: 300, textAlign: "center" }}>
        Copyright © {currentYear} National Institute of Technology Kurukshetra.
        All Rights Reserved.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;

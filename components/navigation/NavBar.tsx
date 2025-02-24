import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", padding: "20px" }}>
      <List>
        {[
          { text: "Home", href: "/" },
          { text: "About", href: "/about" },
          { text: "Mandate", href: "/mandate" },
          { text: "Functioning", href: "/functioning" },
          { text: "Resources", href: "/resources" },
          { text: "Collaborative Contacts", href: "/collaborativecontacts" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "relative", height: "60vh", overflow: "hidden" }}>
      <Box
        component="img"
        src="/homeimg.jpg"
        alt="Background"
        sx={{
          width: "100%",
          height: "60vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          paddingTop: "20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "10vh" }}>
          <Typography variant="h6" sx={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>
            ISRO RAC-S @KKR
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "20px" }}>
            {[
              { text: "About", href: "/about" },
              { text: "Mandate", href: "/mandate" },
              { text: "Functioning", href: "/functioning" },
              { text: "Resources", href: "/resources" },
              { text: "Collaborative Contacts", href: "/collaborativecontacts" }
            ].map((item) => (
              <Link key={item.text} href={item.href} passHref>
                <Button
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                    "&:hover": { color: "#1976d2" },
                  }}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "270px",
            backgroundColor: "white",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Navbar;

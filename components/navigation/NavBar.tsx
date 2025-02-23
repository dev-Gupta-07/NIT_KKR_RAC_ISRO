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
import React, { useState, useEffect } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                    fontSize: "10px",
                    color: "black",
                    fontFamily: "serif"
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
        position="fixed"
        sx={{
          backgroundColor: scrolling ? "rgba(113, 177, 193, 0.24)" : "transparent",
          boxShadow: scrolling ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: scrolling ? "blur(10px)" : "none",
          transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          zIndex: 10,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "10vh" }}>
          {/* <Typography variant="h6" sx={{ fontSize: "18px", color: "black",fontFamily:"serif" }}>
            ISRO RAC-S @NITKKR
          </Typography> */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" ,border:"1px solid transparent", 
            boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.15)",borderRadius:2,}}>
            <Link href="https://nitkkr.ac.in/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="/nit2.png"
                  alt="Logo"
                  sx={{
                    borderRadius: "200px",
                    height: "60px",
                    width: "60px",
                    // objectFit: "",
                  }}
                />
              </a>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "flex" } ,flexDirection:"column",  padding:"5px", }}>
              <Typography variant="h6" sx={{ fontSize: "18px", color: "black", fontFamily:  "serif" }}>
                Regional Academic Center for Space
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "14px", color: "black", fontFamily:  "serif" }}>
                NIT Kurukshetra | ISRO
              </Typography>
            </Box>
            <Link href="https://www.isro.gov.in/" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Box
                  component="img"
                  src="/isro2.svg"
                  alt="Logo"

                  sx={{
                    borderRadius: "150px",
                    height: "60px",
                    width: "60px",
                    // objectFit: "contain",
                  }}
                />
              </a>
            </Link>

            
          </Box>

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
                    fontSize: "15px",
                    // fontWeight: "bold",
                    color: "black",
                    fontFamily: "serif",
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

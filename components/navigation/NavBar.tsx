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
  Menu,MenuItem,Backdrop
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { ArrowDropDown,ArrowDropUp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
 
  const [scrolling, setScrolling] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);

  const [openDropdownm, setOpenDropdownm] = React.useState(null);

const handleDropdownTogglem = (menu:any) => {
  setOpenDropdownm((prevMenu) => (prevMenu === menu ? null : menu));
};
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleHover = (event:any,menu:any) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu)
  };



  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
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
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}
    >
  
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#333",
            fontFamily: "serif",
            textTransform: "uppercase",
          }}
        >
          Regional Academic Center for Space
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "0.8rem",
            color: "#555",
            fontFamily: "serif",
            fontStyle: "italic",
          }}
        >
          NIT Kurukshetra | ISRO
        </Typography>
      </Box>

     
      <List>
  {/* About */}
  <ListItem disablePadding>
    <ListItemButton
      component="a"
      href="/about"
      sx={{
        textAlign: "left",
        padding: "20px",
        borderRadius: "5px",
        fontFamily: "serif",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <ListItemText primary="About" />
    </ListItemButton>
  </ListItem>

  {/* Mandate */}
  <ListItem disablePadding>
    <ListItemButton
      component="a"
      href="/mandate"
      sx={{
        textAlign: "left",
        padding: "20px",
        borderRadius: "5px",
        fontFamily: "serif",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <ListItemText primary="Mandate" />
    </ListItemButton>
  </ListItem>

  {/* Events */}
  <ListItem disablePadding>
    <ListItemButton
      component="a"
      href="/event"
      sx={{
        textAlign: "left",
        padding: "20px",
        borderRadius: "5px",
        fontFamily: "serif",
        display: "flex",
        justifyContent: "space-between",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <ListItemText primary="Events" />
    </ListItemButton>
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleDropdownTogglem("Events");
      }}
    >
      {openDropdownm === "Events" ? <ArrowDropUp /> : <ArrowDropDown />}
    </div>
  </ListItem>

  {openDropdownm === "Events" && (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href="/event/connect"
          sx={{ paddingLeft: "40px", fontFamily: "serif" }}
        >
          <ListItemText primary="Connect" />
        </ListItemButton>
      </ListItem>
    </List>
  )}

  {/* Resources */}
  <ListItem disablePadding>
    <ListItemButton
      component="a"
      href="/resources"
      sx={{
        textAlign: "left",
        padding: "20px",
        borderRadius: "5px",
        fontFamily: "serif",
        display: "flex",
        justifyContent: "space-between",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <ListItemText primary="Resources" />
    </ListItemButton>
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleDropdownTogglem("Resources");
      }}
    >
      {openDropdownm === "Resources" ? <ArrowDropUp /> : <ArrowDropDown />}
    </div>
  </ListItem>

  {openDropdownm === "Resources" && (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href="/resources/callforproposal"
          sx={{ paddingLeft: "40px", fontFamily: "serif" }}
        >
          <ListItemText primary="Call For Proposal" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          href="/resources/downloads"
          sx={{ paddingLeft: "40px", fontFamily: "serif" }}
        >
          <ListItemText primary="Downloads" />
        </ListItemButton>
      </ListItem>
    </List>
  )}

  {/* Collaborative Contacts */}
  <ListItem disablePadding>
    <ListItemButton
      component="a"
      href="/collaborativecontacts"
      sx={{
        textAlign: "left",
        padding: "20px",
        borderRadius: "5px",
        fontFamily: "serif",
        "&:hover": { backgroundColor: "#e0e0e0" },
      }}
    >
      <ListItemText primary="Collaborative Contacts" />
    </ListItemButton>
  </ListItem>
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
                    
                  }}
                />
              </a>
            </Link>
            <Box sx={{ display: { xs: "none", sm: "flex" } ,flexDirection:"column",  padding:"5px", }}>
              <Typography variant="h6" sx={{ fontSize: "1.1rem", color: "black", fontFamily:  "serif" }}>
                Regional Academic Center for Space
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "0.9rem", color: "black", fontFamily:  "serif" }}>
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
              { text: "Events", href: "/event",isDropdown: true },
              { text: "Resources", href: "/resources", isDropdown: true },
              { text: "Collaborative Contacts", href: "/collaborativecontacts" }
            ].map((item) => (
              item.isDropdown ? (
                <div key={item.text} style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <Link href={item.href} passHref>
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "black",
                        fontFamily: "serif",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "transparent", color: "#1976d2" },
                      }}
                    >
                      {item.text}
                    </Button>
                  </Link>
                  <Button
                    onMouseEnter={(e) => handleHover(e, item.text)}
                    sx={{
                      fontSize: "1.2rem",
                      color: "black",
                      fontFamily: "serif",
                      minWidth: "auto",
                      padding: 0,
                      textTransform: "none",
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <ArrowDropDown />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)&& activeMenu === item.text}
                    onClose={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                     {item.text==="Events" && (<> <MenuItem onClick={handleClose}>
                    
                    <Link href="/event/connect" passHref>
                  <Button
                    sx={{
                      fontSize: "13px",
                      color: "black",
                      fontFamily: "serif",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "transparent", color: "#1976d2" },
                    }}
                  >
                    Connect
                  </Button>
                </Link>
                  </MenuItem>
                 </>)}
                   
                    {item.text==="Resources" && (<> <MenuItem onClick={handleClose}>
                    
                    <Link href="/resources/callforproposal" passHref>
                  <Button
                    sx={{
                      fontSize: "13px",
                      color: "black",
                      fontFamily: "serif",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "transparent", color: "#1976d2" },
                    }}
                  >
                    Call For Proposal
                  </Button>
                </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                  <Link href="/resources/downloads" passHref>
                  <Button 
                    sx={{
                      fontSize: "13px",
                      color: "black",
                      fontFamily: "serif",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "transparent", color: "#1976d2" },
                    }}
                  >
                    Downloads
                  </Button>
                </Link>
                  </MenuItem></>)}
                 
                  </Menu>
                </div>
              ) : (
                <Link key={item.text} href={item.href} passHref>
                  <Button
                    sx={{
                      fontSize: "1.2rem",
                      color: "black",
                      fontFamily: "serif",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "transparent", color: "#1976d2" },
                    }}
                  >
                    {item.text}
                  </Button>
                </Link>
              )
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
      {mobileOpen && (
        <Backdrop
          open={mobileOpen}
          onClick={handleDrawerToggle}
          sx={{ zIndex: 1200 }}
        />
      )}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "270px",
            backgroundColor: "rgb(192, 224, 233)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export default Navbar;

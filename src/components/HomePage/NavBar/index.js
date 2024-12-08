"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RegisterModal from "../RegisterModal";
import LoginModal from "../LoginModal";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={handleRegisterOpen}
            >
              Register
            </Button>
            <Button
              variant="text"
              sx={{ color: "white" }}
              style={{ marginLeft: "10px" }}
              onClick={handleLoginOpen}
            >
              Login
            </Button>
          </Box>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Register Modal */}
      <RegisterModal
        handleRegisterClose={handleRegisterClose}
        openRegister={openRegister}
      />

      {/* Login Modal */}
      <LoginModal handleLoginClose={handleLoginClose} openLogin={openLogin} />
    </>
  );
};

export default NavBar;

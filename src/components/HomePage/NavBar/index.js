import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary" sx={{ padding: "0 20px" }}>
      <Toolbar disableGutters>
        {/* Logo Section */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": { color: "secondary.main" },
            }}
            onClick={() => navigate("/")}
          >
            Drashti
          </Typography>
        </Box>

        {/* Signup Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/signup")}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

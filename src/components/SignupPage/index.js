"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Registration from "./Registration";
import LoginPage from "./Login";

function SignupPage() {
  const [showlogin, setShowlogin] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "40%", px: 10 }}>
        {showlogin ? <LoginPage /> : <Registration />}
        <Box
          onClick={() => setShowlogin(!showlogin)}
          sx={{ cursor: "pointer" }}
        >
          <Typography sx={{ textDecoration: "underline" }}>
            {showlogin ? "Don't have an account?" : "Already have an account?"}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "40%", px: 5 }}>
        <Box
          component="img"
          src="/assests/registration_img.png"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
}

export default SignupPage;

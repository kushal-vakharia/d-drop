"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Email and password are required.");
      setSuccess("");
      return;
    }

    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        setSuccess("Login successful!");
        setError("");
        setFormData({ email: "", password: "" });
      } else {
        setError("Invalid email or password.");
        setSuccess("");
      }
    }, 1000);
  };

  return (
    <>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
      >
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <TextField
          label="Email"
          variant="standard"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <TextField
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "right" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ maxWidth: "fit-content" }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;

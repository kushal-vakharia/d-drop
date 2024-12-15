import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password } = formData;

    // Basic validation
    if (!email || !username || !password) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSuccess("Registration successful!");
      setError("");
      setFormData({ email: "", username: "", password: "" });
    }, 1000);
  };

  return (
    <>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Create an Account
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
        {/* Error and Success Messages */}
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        {/* Email Field */}
        <TextField
          label="Email"
          variant="standard"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Username Field */}
        <TextField
          label="Username"
          variant="standard"
          fullWidth
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        {/* Password Field */}
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

        {/* Submit Button */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "right" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ maxWidth: "fit-content" }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Registration;

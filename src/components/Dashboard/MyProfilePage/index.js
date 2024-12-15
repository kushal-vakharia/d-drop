import React from "react";
import { DashboardBox } from "../dashboard.styled";
import { Box, Button, TextField, Typography } from "@mui/material";

const MyProfilePage = () => {
  return (
    <DashboardBox>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          My Profile
        </Typography>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 3,
            maxWidth: "80%",
          }}
        >
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            name="email"
            //   value={formData.email}
            //   onChange={handleChange}
            required
          />

          <TextField
            label="Username"
            variant="standard"
            type="text"
            fullWidth
            name="username"
            //   value={formData.username}
            //   onChange={handleChange}
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
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </DashboardBox>
  );
};

export default MyProfilePage;

import React from "react";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import FileUpload from "./FileUpload";

const HomePage = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <NavBar />
      <FileUpload />
    </Box>
  );
};

export default HomePage;

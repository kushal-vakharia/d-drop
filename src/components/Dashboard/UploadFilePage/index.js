import React from "react";
import { DashboardBox } from "../dashboard.styled";
import { Typography } from "@mui/material";

const UploadFilePage = () => {
  return (
    <DashboardBox>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        Upload Your File
      </Typography>
    </DashboardBox>
  );
};

export default UploadFilePage;

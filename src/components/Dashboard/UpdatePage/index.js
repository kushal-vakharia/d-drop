import React from "react";
import { DashboardBox } from "../dashboard.styled";
import { Typography } from "@mui/material";

const UpdatePage = () => {
  return (
    <DashboardBox>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        Update
      </Typography>
    </DashboardBox>
  );
};

export default UpdatePage;

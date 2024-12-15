import React from "react";
import { DashboardBox } from "../dashboard.styled";
import { Typography } from "@mui/material";

const Logs = () => {
  return (
    <DashboardBox>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        Logs
      </Typography>
    </DashboardBox>
  );
};

export default Logs;

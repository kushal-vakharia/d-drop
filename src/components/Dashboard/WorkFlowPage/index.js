import React from "react";
import { DashboardBox } from "../dashboard.styled";
import { Typography } from "@mui/material";

const WorkFlowPage = () => {
  return (
    <DashboardBox>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        Create Your Workflow
      </Typography>
    </DashboardBox>
  );
};

export default WorkFlowPage;

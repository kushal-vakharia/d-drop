import React from "react";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import WorkFlowPage from "./WorkFlowPage";
import UploadFilePage from "./UploadFilePage";
import UpdatePage from "./UpdatePage";
import Logs from "./Logs";
import { Box } from "@mui/material";
import MyProfilePage from "./MyProfilePage";

const Dashboard = () => {
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar currentURL={currentURL} />
      {currentURL === "/dashboard" ? (
        <WorkFlowPage />
      ) : currentURL === "/upload-file" ? (
        <UploadFilePage />
      ) : currentURL === "/update" ? (
        <UpdatePage />
      ) : currentURL === "/logs" ? (
        <Logs />
      ) : currentURL === "/my-profile" ? (
        <MyProfilePage />
      ) : null}
    </Box>
  );
};

export default Dashboard;

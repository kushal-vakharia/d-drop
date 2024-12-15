import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Brightness1SharpIcon from "@mui/icons-material/Brightness1Sharp";
import { deepOrange } from "@mui/material/colors";

const items = [
  { title: "Work Flow", path: "/dashboard" },
  { title: "Upload File", path: "/upload-file" },
  { title: "update", path: "/update" },
  { title: "Logs", path: "/logs" },
];

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ minWidth: 250, height: "100vh", borderRight: "1px solid #ccc" }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          mt: 5,
          mb: 2,
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{ bgcolor: "GrayText" }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          U
        </Avatar>
        <Typography variant="h6">Username</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/my-profile")}
            sx={{ pl: 7 }}
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ pl: 7 }}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {items.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(text.path)} sx={{ pl: 7 }}>
              <ListItemIcon sx={{ minWidth: "20px" }}>
                <Brightness1SharpIcon sx={{ fontSize: "10px" }} />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

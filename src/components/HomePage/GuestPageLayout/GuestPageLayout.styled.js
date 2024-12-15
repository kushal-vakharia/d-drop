import { Box, styled } from "@mui/material";

export const GuestPageLayoutContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

export const GuestPageLayoutInnerBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  maxWidth: 1440,
}));

export const GuestPagesLayoutNavSpace = styled(Box)(() => ({
  width: "100%",
  height: "86px",
}));

import { Box, styled } from "@mui/material";

export const PrimarySectionContainer = styled(Box)(({ theme }) => ({
  paddingBlock: theme.spacing(10),
  paddingInline: theme.spacing(8),
  display: "flex",
  gap: theme.spacing(8),

  [theme.breakpoints.down("lg")]: {
    paddingBlock: theme.spacing(5),
    paddingInline: theme.spacing(2.5),
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const PrimarySectionLeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 640,
  width: "100%",
  gap: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(5),
    maxWidth: "unset",
  },
}));

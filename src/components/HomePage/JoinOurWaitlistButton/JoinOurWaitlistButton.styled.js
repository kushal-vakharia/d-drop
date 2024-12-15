import { Button, styled } from "@mui/material";

export const ButtonJoinOurWaitlist = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  paddingBlock: theme.spacing(2),
  paddingInline: theme.spacing(4),
  textTransform: "none",
  boxShadow: "none",
  maxWidth: "fit-content",
  position: "unset",
  [theme.breakpoints.down("lg")]: {
    alignSelf: "center",
  },
}));

import { Accordion, AccordionSummary, Box, styled } from "@mui/material";

export const LandingPageQnABox = styled(Box)(({ theme }) => ({
  paddingInline: theme.spacing(10),
  paddingBlock: theme.spacing(12),

  [theme.breakpoints.down("lg")]: {
    paddingInline: theme.spacing(0),
  },
}));

export const LandingPageQnAInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingInline: theme.spacing(4),
  gap: theme.spacing(6),
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const LandingPageQnAHeading = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: 584,

  [theme.breakpoints.down("lg")]: {
    maxWidth: "unset",
  },
}));

export const LandingPageQnAAccordion = styled(Accordion)(({ theme }) => ({
  maxWidth: 584,
  backgroundColor: "transparent",

  "&.MuiPaper-root ": {
    position: "unset",
    marginBlock: "0px",
    borderTop: "1px solid",
  },
  "&.MuiPaper-root::before ": {
    display: "none",
  },

  [theme.breakpoints.down("lg")]: {
    maxWidth: "unset",
  },
}));

export const LandingPageQnAAccordionSummary = styled(AccordionSummary)(
  ({ theme }) => ({
    padding: 0,
    position: "unset",
    "& .MuiAccordionSummary-content": {
      marginBlock: theme.spacing(2.5),
      justifyContent: "space-between",
      alignItems: "center",
      gap: theme.spacing(1),
    },
  })
);

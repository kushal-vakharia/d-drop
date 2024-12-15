import { Typography, Box, AccordionDetails } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  LandingPageQnABox,
  LandingPageQnAInnerBox,
  LandingPageQnAHeading,
  LandingPageQnAAccordion,
  LandingPageQnAAccordionSummary,
} from "./QuestionAnswerSection.styled";
import { FnQData } from "./constants";

const QuestionAnswerSection = () => {
  const [expanded, setExpanded] = useState("1");

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <LandingPageQnABox id="faq-section">
      <LandingPageQnAInnerBox>
        <LandingPageQnAHeading>
          <Typography variant="h3">FAQ</Typography>
          <Typography variant="h6">
            Got questions? We’ve got answers.
          </Typography>
        </LandingPageQnAHeading>
        <Box>
          {FnQData.map((item) => (
            <LandingPageQnAAccordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <LandingPageQnAAccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="landingSubtitle1">{item.que}</Typography>
                {expanded === item.id ? <RemoveIcon /> : <AddIcon />}
              </LandingPageQnAAccordionSummary>
              <AccordionDetails>
                <Typography variant="landingBody1" sx={{ lineHeight: "28px" }}>
                  {item.ans}
                </Typography>
              </AccordionDetails>
            </LandingPageQnAAccordion>
          ))}
        </Box>
      </LandingPageQnAInnerBox>
    </LandingPageQnABox>
  );
};

export default QuestionAnswerSection;

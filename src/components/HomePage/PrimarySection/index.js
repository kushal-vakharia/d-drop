import { Box, Typography } from "@mui/material";
import React from "react";
import {
  PrimarySectionContainer,
  PrimarySectionLeftBox,
} from "./PrimarySection.styled";
import WaitlistBtnAndSubscribeModal from "../JoinOurWaitlistButton";

const PrimarySection = ({ title, description, image }) => {
  return (
    <PrimarySectionContainer>
      <PrimarySectionLeftBox>
        <Typography variant="h3">{title}</Typography>

        <Typography variant="landingH6">{description}</Typography>

        <WaitlistBtnAndSubscribeModal />
      </PrimarySectionLeftBox>

      <Box
        component="img"
        src={image}
        alt="transform"
        width={608}
        height={349}
        className="h-full max-lg:w-[100%] max-lg:max-w[390px] max-lg:h-auto"
      />
    </PrimarySectionContainer>
  );
};

export default PrimarySection;

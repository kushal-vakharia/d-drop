"use client";

import React from "react";
import { Typography } from "@mui/material";
import { ButtonJoinOurWaitlist } from "./JoinOurWaitlistButton.styled";

const WaitlistBtnAndSubscribeModal = () => {
  return (
    <>
      <ButtonJoinOurWaitlist variant="contained">
        <Typography variant="button">Join Our Waitlist</Typography>
      </ButtonJoinOurWaitlist>
    </>
  );
};

export default WaitlistBtnAndSubscribeModal;

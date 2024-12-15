import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  GuestLayoutFooterContainer,
  FooterInnerContainer,
  FooterLinkContainer,
  TextCenterContainer,
  FooterLinkMainContainer,
} from "./GuestLayoutFooter.styled";

const GuestLayoutFooter = () => {
  return (
    <GuestLayoutFooterContainer container>
      <Grid
        item
        xs={12}
        md={4}
        className="max-md:flex max-md:justify-center max-md:items-center"
      >
        <Box className="text-left">
          <FooterInnerContainer>
            <Box component="a" href="/">
              <Typography>Drashti</Typography>
            </Box>
            <Typography variant="landingBody2Light">
              Let AI handle the work, so your firm can focus on winning.
            </Typography>

            <Typography variant="landingBody2ExtraLight">
              Copyright © 2024 - All rights reserved
            </Typography>
          </FooterInnerContainer>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        {/* <TextCenterContainer>
          <FooterLinkMainContainer>
            <Typography variant="landingBody1Bold">LINKS</Typography>
            <FooterLinkContainer>
              <Typography variant="landingBody2Light">Support</Typography>
              <Typography variant="landingBody2Light">Pricing</Typography>
              <Typography variant="landingBody2Light">Affiliates</Typography>
            </FooterLinkContainer>
          </FooterLinkMainContainer>
        </TextCenterContainer> */}
      </Grid>
      <Grid item xs={12} md={4}>
        <TextCenterContainer>
          <FooterLinkMainContainer>
            <Typography variant="landingBody1Bold">LEGAL</Typography>
            <FooterLinkContainer>
              <Box
                component="a"
                href="/terms-of-services"
                className="no-underline"
              >
                <Typography variant="landingBody2Light">
                  Terms of services
                </Typography>
              </Box>
              <Box
                component="a"
                href="/privacy-policy"
                className="no-underline"
              >
                <Typography variant="landingBody2Light">
                  Privacy policy
                </Typography>
              </Box>
            </FooterLinkContainer>
          </FooterLinkMainContainer>
        </TextCenterContainer>
      </Grid>
    </GuestLayoutFooterContainer>
  );
};

export default GuestLayoutFooter;

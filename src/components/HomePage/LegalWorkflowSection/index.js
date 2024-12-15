"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import {
  LegalWorkflowSectionMainBox,
  LegalWorkflowSectionTitle,
  LegalWorkflowSectionGridBox,
  LegalWorkflowSectionGridSecondBox,
  GrindBox,
  GrinItem,
  DoneOutlinedIconBox,
  DoneOutlinedIcons,
} from "./LegalWorkflowSection.Styled";
import { DataItem } from "./constant";

const LegalWorkflowSection = () => {
  const theme = useTheme();
  const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <LegalWorkflowSectionMainBox>
      <LegalWorkflowSectionTitle>
        <Typography variant={matchDownLg ? "landingH2Mobile" : "landingH2"}>
          Revolutionize Your Legal Workflow with Salego
        </Typography>
        <Typography variant="landingH6" color="#303030CC">
          Let AI handle the heavy lifting while your legal staff supervises.
          Salego’s intelligent features streamline every step of your legal
          process, saving time and boosting accuracy.
        </Typography>
      </LegalWorkflowSectionTitle>
      <LegalWorkflowSectionGridBox>
        <LegalWorkflowSectionGridSecondBox>
          <GrindBox container columnSpacing={4}>
            {DataItem.map((list) => (
              <Grid item xs={12} lg={6} key={list.id}>
                <GrinItem>
                  <DoneOutlinedIconBox>
                    <DoneOutlinedIcons
                      className={list.errorColor ? "!text-[#C11F32]" : ""}
                    />
                    <Typography
                      variant={
                        list.errorColor ? "landingSubTitle2" : "landingBody1"
                      }
                      sx={{
                        lineHeight: "26px",
                      }}
                    >
                      {list.title}
                    </Typography>
                  </DoneOutlinedIconBox>
                </GrinItem>
              </Grid>
            ))}
          </GrindBox>
        </LegalWorkflowSectionGridSecondBox>
      </LegalWorkflowSectionGridBox>
    </LegalWorkflowSectionMainBox>
  );
};

export default LegalWorkflowSection;

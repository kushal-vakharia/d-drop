import { Box } from "@mui/material";
import {
  GuestPageLayoutContainer,
  GuestPageLayoutInnerBox,
} from "./HomePage.styled";
import PrimarySection from "./PrimarySection";
import LegalWorkflowSection from "./LegalWorkflowSection";
import GuestLayoutHeader from "./GuestPageLayout/GuestLayoutHeader";
import GuestLayoutFooter from "./GuestPageLayout/GuestLayoutFooter";
import Navbar from "./NavBar";
import QuestionAnswerSection from "./QuestionAnswerSection";

const HomePage = () => {
  return (
    <GuestPageLayoutContainer>
      <GuestPageLayoutInnerBox>
        {/* <GuestLayoutHeader /> */}
        <Navbar />
        <Box>
          <PrimarySection
            title="Let AI Do the Legal Work!"
            description="Salego automates case management, document drafting, and client communications. 
        AI agents handle the work under legal staff supervision, allowing your team to scale and focus on strategic tasks."
            image="/assests/transform.png"
          />
          <LegalWorkflowSection />
          <QuestionAnswerSection />
          {/* 
      <RevolutionizeSection /> */}
        </Box>
        <GuestLayoutFooter />
      </GuestPageLayoutInnerBox>
    </GuestPageLayoutContainer>
  );
};

export default HomePage;

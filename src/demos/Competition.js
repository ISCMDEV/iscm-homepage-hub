import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import TextWithBanner from "components/features/TextWithBanner.js";
import CompetitionImage from "images/Competition/Competition.jpg";
import TimeLine from "images/Competition/CompetitionTimeline.png";
import Partners from "images/Competition/Partners.jpg";
import Prize from "images/Competition/Prize.PNG";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import tw from "twin.macro";
import styled from "styled-components";

const StyledSection = styled.section`
  ${tw`text-center mb-8`}
`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");
   min-height:${props.height};`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full `,
]);
const Heading = tw(
  SectionHeading
)` text-3xl sm:text-4xl lg:text-5xl  leading-tight`;
const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
]);

const text = [
  "It is the first time in human history, we have no idea what the world will be like in the next 30 years (the writer Yuval Harari). The first half of the 21st century will be the most important in the history of the human race because of all the challenges we face from an amazing leap in technology and the urban challenges in a rapidly urbanizing and globalized world. In this phenomenon, smart cities will not just be a trend but also become a must-have. But How Smart cities will deal with urban challenges and How integrated technology and other fields can be applied to solve the urbanization crises? Many successful smart cities in the world recognize that urban cultural values, urban identity integrate with innovation and new technology have always been a driving force of sustainable cities. Especially in a developing country context where cities have very limited resources, finding an identity as a driven force is one of the most important questions as well as proposing urban problem-solving. If you live in a city, especially in a metropolis, you have likely asked yourself How do we say we’re living in a city but always have to flee the city to get fresh air or connect to nature? How do we, as an architect, urban designer or urban planner, and most important as a community, reclaim the public spaces to create a better urban life.",
  "SMARTCITY+ is a second international competition launched by Institute of Smart City and Management (ISCM), University of Economics Ho Chi Minh City (UEH), in partnership with Handong Global University, UNESCO/UNITWIN, Chemonics International, HCMC University of Architecture (UAH), HCMC University of Technology and Education, Trieste University, Blekinge Institute of Technology, Seoul National University, Politecnico de Milano, University of Industrial Fine Art, Saxion University, National Institute of Technology Calicut, University of Melbourne, University of Auckland, SmithGroup, XnTree - Global Tech Accelerator, World Smart Cities Forum; SMARTCITY+ proposes an alternative method to achieve livable city that works mainly at the small scale of public spaces. In this competition, participants are asked to explore the possibilities of urban intervention in public space that can lead to positive changes in a larger scale. Participants are free to either extend these existing areas and transform them, or propose a new design on a site of their choice.This competition encourages participants to be bold and think outside the box. How can architecture, urban design and planning go beyond the traditional concept of urban public spaces. Winning participants need to apply unique strategies and creative designs to experiment with new urban scenarios, which are able to promote social exchange, community activities and citizen interaction through the implementation of multifunctional designs.",
];
export default () => (
  <AnimationRevealPage>
    {" "}
    <StyledSection id="overview">
      <TextWithBanner
        title="SMART CITY INTERNATIONAL DESIGN COMPETITION"
        text={text}
        image={CompetitionImage}
        id="overview"
      />
    </StyledSection>
    <StyledSection id="timeline">
      <Heading> Timeline</Heading>
      <Image height="50rem" imageSrc={TimeLine}></Image>
    </StyledSection>
    <br />
    <StyledSection id="prize">
      <Heading> Prize Pool</Heading>
      <Image height="40rem" imageSrc={Prize}></Image>
    </StyledSection>
    <StyledSection id="register">
      <Heading> Register Now</Heading>
      <PrimaryButton>
        <a href="https://forms.gle/WUvKPW1wUtgzJvXo6">
          CLICK HERE TO REGISTER NOW
        </a>
      </PrimaryButton>
    </StyledSection>
    <StyledSection id="timeline">
      <Heading>Our Partners</Heading>
      <Image height="40rem" imageSrc={Partners}></Image>
    </StyledSection>
  </AnimationRevealPage>
);

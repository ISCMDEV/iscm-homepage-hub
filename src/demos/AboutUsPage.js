import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { CustomBanner as Banner } from "components/hero/BackgroundAsImageWithCenteredContent";
import UniversitiesIconImage from "images/university.svg";
import CompaniesIconImage from "images/company.svg";
import CommunityLoveIconImage from "images/community.svg";

const Subheading = tw.span`uppercase tracking-wider`;
export default () => {
  return (
    <AnimationRevealPage>
      <Banner heading1="Who Are We?" heading2="About Our Insitute" />
      <MainFeature1
        heading="About Our Insitute."
        subheading="We are a modern team of young reaschers."
        description="Institute of Smart City and Management (ISCM) was established with the goal of becoming a connector between universities, government management agencies, research organizations, domestic and foreign companies, and the local community. Together, we will research and propose smart strategies and creative solutions to solve urban problems and develop a better education towards sustainable urban development in Vietnam."
        buttonRounded={false}
        primaryButtonText="Meet The Team"
        primaryButtonUrl="people"
        imageSrc="https://cdn.pixabay.com/photo/2015/01/09/11/09/startup-594091_960_720.jpg"
      />
      <MainFeature1
        heading="Our Projects"
        subheading="We aim to excel in research and development."
        description="Institute of Smart City and Management (2020 - 2025)/School of Design and Planning (2025 and forward) will be a leading institution/School by enhancing the quality of urban life towards sustainable and smart community development through international integrated education system, in-depth research and problem-solving projects."
        buttonRounded={false}
        primaryButtonText="Our Projects"
        primaryButtonUrl="research-development"
        imageSrc="https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_960_720.jpg"
        textOnLeft={false}
      />
      <WallOfText textContent="Enhancing urban quality and environment by excellent education, in-depth research and problem-solving projects in terms of “Think Globally - Act Locally”.Educating new generation students for creative and critical thinking, global knowledge, professional skills, sustainability perception.Developing the most advanced integrated Smart City StudioLab system with sufficient spaces and equipment for comprehensive and in-depth analysis.Impacting on urban planning, design and management by changing the way of thinking and involvement of the community, local authority and stakeholders."/>

      <Features
        subheading={<Subheading>Our 5 Values</Subheading>}
        heading="We connect."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: UniversitiesIconImage,
            title: "Creativity",
            description: " For innovative education systems spurring excellence and productivity."
          },
          {
            imageSrc: CompaniesIconImage,
            title: "Integration",
            description:
              "For multidisciplinary approaches leading academic covergence and integration.",
          },
          {
            imageSrc: CommunityLoveIconImage,
            title: "Practicality",
            description:
              "For problem-solving education and researches contributing the sustainable society.",
          },
          {
            imageSrc: CommunityLoveIconImage,
            title: "Globalization",
            description:
              "For international standards of the education and researches interacting with international public and private sectors.",
          },
          {
            imageSrc: CommunityLoveIconImage,
            title: "Innovation",
            description:
              "For high-end digital academic environment leading pioneering ",
          },
        ]}
        linkText=""
      />
    </AnimationRevealPage>
  );
};
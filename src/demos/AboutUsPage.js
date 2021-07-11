import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { CustomBanner as Banner } from "components/hero/BackgroundAsImageWithCenteredContent";
import UniversitiesIconImage from "images/university.svg";
import CompaniesIconImage from "images/company.svg";
import CommunityLoveIconImage from "images/community.svg";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ourVision from "../images/OurVision.jpg"
import DevelopmentProgram from "../images/DevelopmentProgram.jpg"

const Subheading = tw.span`uppercase tracking-wider`;
export default () => {
  return (
    <AnimationRevealPage>
      <Banner heading1="Who Are We?" heading2="About Our Insitute" />
      <MainFeature1
        heading="Our Vision."
        subheading="We are a modern team of young reaschers."
        description="Institute of Smart City and Management (2020 - 2025)/School of Design and Planning (2025 and forward) will be a leading institution/School by enhancing the quality of urban life towards sustainable and smart community development through international integrated education system, in-depth research and problem-solving projects."
        buttonRounded={false}
        primaryButtonText="Meet The Team"
        primaryButtonUrl="people"
        imageSrc={ourVision}
      />
      <MainFeature1
        heading="Development Programs"
        subheading="We aim to excel in research and development."
        description="The 4 pillars which are Education & Training, Research & Project, Smart City StudioLab, and Social Engagement, form the foundation of the centers' goal to lead the University's global effort to create knowledge, provide solutions, and enhance learning by reaching/project out and connecting with others."
        buttonRounded={false}
        primaryButtonText="Find out more"
        primaryButtonUrl="research-development"
        imageSrc={DevelopmentProgram}
        textOnLeft={false}
      />
      <WallOfText textContent="Enhancing urban quality and environment by excellent education, in-depth research and problem-solving projects in terms of “Think Globally - Act Locally”. Educating new generation students for creative and critical thinking, global knowledge, professional skills, sustainability perception.Developing the most advanced integrated Smart City StudioLab system with sufficient spaces and equipment for comprehensive and in-depth analysis.Impacting on urban planning, design and management by changing the way of thinking and involvement of the community, local authority and stakeholders." />
      <Testimonial />
      <Features
        subheading={<Subheading>Core Values</Subheading>}
        heading="Core Values"
        description="Our core values act as a compass, giving us a direction for leadership and daily decisions, helping us enjoy our time at work and keeping everything moving forward."
        cards={[
          {
            imageSrc: UniversitiesIconImage,
            title: "Creativity",
            description:
              " For innovative education systems spurring excellence and productivity.",
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

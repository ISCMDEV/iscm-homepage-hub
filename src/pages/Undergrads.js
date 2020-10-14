import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import WallOfText from "components/blogs/Paragraphs.js";
import { CustomBanner as Banner } from "components/hero/BackgroundAsImageWithCenteredContent";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Banner heading1="Our undergraduate" heading2="Programs" />
      <WallOfText headingText=" " />
      <MainFeature1
        subheading={<Subheading>bachelor programs</Subheading>}
        heading="Bachelor of Architecture and Urban Design"
        description="In a rapid changing world, from your home to a giant building, from your neighborhood to your city, Architecture and Urban Design always play a key role in all those things. As a bachelor student of Architecture and Urban Design at ISCM-UEH, you will have the chance to design from the very first day of your studies with a program focusing on problem-solving studios and technology application."
        buttonRounded={false}
        primaryButtonText="Learn more"
        primaryButtonUrl="bachelors/1"
        imageSrc="https://images.unsplash.com/photo-1546953304-5d96f43c2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
      />
    </AnimationRevealPage>
  );
};

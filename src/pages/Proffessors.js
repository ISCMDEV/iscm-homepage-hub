import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";
import { AdjunctProfs, Collaborator } from "components/cards/ProfileThreeColGrid.js";
import tw from "twin.macro";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default function CollabPage() {
  return (
    <AnimationRevealPage>
      {/* <Hero heading1="Our" heading2="People" /> */}
      <AdjunctProfs
        heading="Our Professors"
        subheading={<Subheading>Our Adjunction Proffessors</Subheading>}
      />
      {/* <iframe src="https://www.google.com" title="W3Schools Free Online Web Tutorials"></iframe> */}
    </AnimationRevealPage>
  );
}

import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import tw from "twin.macro";
import { CoreMembers } from "components/cards/ProfileThreeColGrid.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default function Coremembers() {
  return (
    <AnimationRevealPage>
      <CoreMembers heading1="Meet Our Core Members" />
    </AnimationRevealPage>
  );
}

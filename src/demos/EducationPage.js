import React from "react";
//import tw from "twin.macro";
//import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { EducationPrograms as Blogposts } from "components/blogs/BlogIndex.js";

import { CustomBanner as Hero } from "components/hero/BackgroundAsImageWithCenteredContent.js";

export default function EduPage() {
  return (
    <AnimationRevealPage>
      <Hero heading1="Our" heading2=" Education Programs" />
      <Blogposts />
    </AnimationRevealPage>
  );
}

import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import TabGrid from "components/cards/TabCardGrid.js";

export default () => {
  const HighlightedText = tw.span`bg-primary-800 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Upcoming Event.
            <HighlightedText>Universal Design Seminar</HighlightedText>
          </>
        }
        description="2020 - the time of changes. Co-organizers:"
        imageSrc="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_960_720.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Register"
        primaryButtonUrl="events/1614038400"
        watchVideoButtonText="Have a look"
      />

      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            <HighlightedText>News and events.</HighlightedText>
          </>
        }
      />
    </AnimationRevealPage>
  );
};

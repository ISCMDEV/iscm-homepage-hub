import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Hero2 from "components/hero/TwoColumnWithVideoLink.js"
export default () => {
  const HighlightedText = tw.span`bg-primary-800 text-center text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Event
            <HighlightedText>ArtTech Fusion for future Smart Cities</HighlightedText>
          </>
        }
        description="2021 - the time of changes."
        imageSrc="images/kết-hợp-nghệ-thuật-và-công-nghệ-hướng-đến-thành-phố-thông-minh-đáng-sống-3-.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Detail"
        primaryButtonUrl="article/events/1610097900"
        watchVideoButtonText="Have a look"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/-25ln6bZocY"
      />
      <Hero2
      heading={
        <>
          Competition
          <HighlightedText>Smartcity+</HighlightedText>
        </>
      }
      description="The 2nd international design competition for Architecture and Urban Design Students"
      imageSrc="images/futurecity.jpg"
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Detail"
      primaryButtonUrl="https://iscm.ueh.edu.vn/article/events/1617515400"
      watchVideoButtonText="Have a look at our first competition"
      watchVideoYoutubeUrl="https://www.youtube.com/embed/juLuhNmmvtQ"
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

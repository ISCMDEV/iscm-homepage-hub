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
            Upcoming Event
            <HighlightedText>A New Understanding Of The Imperative Of Healthy City Design</HighlightedText>
          </>
        }
        description="2021 - the time of changes. Co-organizers:"
        imageSrc="images/b-h-iscm-webinar-poster_1920x1080.png"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Detail"
        primaryButtonUrl="article/events/1615891380"
        watchVideoButtonText="Have a look"
        watchVideoYoutubeUrl=""
      />
      <Hero
        heading={
          <>
            Event
            <HighlightedText>ArtTech Fusion for future Smart Cities</HighlightedText>
          </>
        }
        description="2021 - the time of changes. Co-organizers:"
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
          <HighlightedText>Smart Design for Post-Pandemic World</HighlightedText>
        </>
      }
      description="2020 - the time of changes. Co-organizers:"
      imageSrc="images/futurecity.jpg"
      imageCss={imageCss}
      imageDecoratorBlob={true}
      primaryButtonText="Detail"
      primaryButtonUrl="http://iscmfuturecity.ueh.edu.vn/"
      watchVideoButtonText="Have a look"
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

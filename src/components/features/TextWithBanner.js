import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw.div`relative`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full min-h-144`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(
  SectionHeading
)` text-3xl sm:text-4xl lg:text-5xl leading-tight`;
const Description = tw.p`px-16 text-justify  text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`;

export default ({ textOnLeft = false, text, image, title }) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const statistics = [
    {
      key: "Establishment",
      value: "June 2020",
    },
    {
      key: "Global Partners",
      value: ">10",
    },
    {
      key: "Members",
      value: "14",
    },
    {
      key: "Education Program",
      value: "3",
    },
  ];

  return (
    <Container>
      <Image imageSrc={image} />
      <TextContent>
        <Heading>{title}</Heading>
        {text.map((text, index) => (
          <Description>{text}</Description>
        ))}
      </TextContent>
    </Container>
  );
};

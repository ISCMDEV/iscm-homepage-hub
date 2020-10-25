import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import { ReactComponent as Website } from "images/WebsiteIcon.svg";
import MemberTUA from "./../../images/People/TuA.jpg";
import MemberMAI from "./../../images/People/MAI.JPG";
import MemberHAN from "./../../images/People/HAN.JPG";
import MemberTRI from "./../../images/People/TRI.jpg";
import MemberTAN from "./../../images/People/TAN.JPG";
import MemberLV from "./../../images/People/LV.jpg";
import UNAI from "./../../images/Partners/UNAI.jpg";
import OMG from "./../../images/Partners/OMG.png";
import BH from "./../../images/Partners/BH.jpg";
import HTE from "./../../images/Partners/HTE.jpg";
import IOT from "./../../images/Partners/IOT.jpg";
import KBET from "./../../images/Partners/KBET.jpg";
import KIE from "./../../images/Partners/THEKIE.jpg";
import HGU from "./../../images/Partners/HGU.jpg";
import BTH from "./../../images/Partners/BTH.jpg";
import POLIMI from "./../../images/Partners/POLIMI.jpg";
import UT from "./../../images/Partners/UT.jpg";
import HU from "./../../images/Partners/HU.jpg";
import DQL from "./../../images/People/DQL.jpg";
import SEO from "./../../images/People/DrDucksu.jpg";
import KOO from "./../../images/People/DrKoo.jpg";
import KIEN from "./../../images/People/DrToKien.jpg";
import NAM from "./../../images/People/NAMLE.jpg";
import CUYVERS from "./../../images/People/ProfCuyvers.jpg";
import STEVEN from "./../../images/People/StevenPetit.jpg";
import THANG from "./../../images/People/Thang.jpg"

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "ISCM Core Members",
  subheading = "Our Team",
  description = "At ISCM, we bring together diverse team with diverse skillset, experience and background to produce a richer, broader set of ideas, skills and innovative solotions.",
  cards = [
    {
      imageSrc: MemberTUA,
      position: "Director",
      name: "Dr. Tu Anh Trinh",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: SEO,
      position: "International Coordinator",
      name: "Dr. Ducksu Seo",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: MemberMAI,
      position: "Operation Manager",
      name: "M.Arch Mai Tran",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: MemberHAN,
      position: "Marketing Manager",
      name: "M.Sc Hanh An Le",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: CUYVERS,
      position: "Senior Lecturer",
      name: "Prof. Rob Cuyvers",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: KIEN,
      position: "Senior Lecturer",
      name: "Dr. To Kien",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: NAM,
      position: "Senior Lecturer",
      name: "Dr. Nam Le",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: KOO,
      position: "Senior Lecturer",
      name: "Dr. Chamun Koo",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: MemberTRI,
      position: "Research Coordinator",
      name: "M.Sc Hoai Pham",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: STEVEN,
      position: "Lecturer",
      name: "M.Arch Steven Petit",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: THANG,
      position: "Lecturer",
      name: "M.Arch Thang Trinh",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: DQL,
      position: "Lecturer",
      name: "ME. Loc Duong Quy",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: MemberLV,
      position: "StudioLab Administrator",
      name: "B.E Viet Le",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: MemberTAN,
      position: "IT Researcher",
      name: "B.Sc An Le",
      links: [
        {
          url: "",
          icon: Website,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};

export const Collaborator = ({
  heading = "ISCM Core Members",
  subheading = "Our Team",
  description = "",
  cards = [
    {
      imageSrc: HGU,
      position: " ",
      name: "Handong Global University",
      links: [
        {
          url: "http://www.handong.edu/eng/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: HU,
      position: " ",
      name: "Hasselt University",
      links: [
        {
          url: "https://www.uhasselt.be/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: BTH,
      position: " ",
      name: "Blekinge Institute of Technology ",
      links: [
        {
          url: "https://www.bth.se/eng/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: UT,
      position: " ",
      name: "University of Trieste",
      links: [
        {
          url: "https://www.units.it/en",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: POLIMI,
      position: " ",
      name: "Politechnico Di Milano",
      links: [
        {
          url: "https://www.polimi.it/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: KIE,
      position: " ",
      name: "THE KIE",
      links: [
        {
          url: "http://en.thekie.com/introduce",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: KBET,
      position: " ",
      name: "Korea Institute of Building Energy Technology",
      links: [
        {
          url: "http://www.kbet.or.kr/en/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: IOT,
      position: " ",
      name: "IOTLink",
      links: [
        {
          url: "https://iotlink.com.vn/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: HTE,
      position: " ",
      name: "HTE Global",
      links: [
        {
          url: "https://hteglobal.net/vi/trang-chu/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: BH,
      position: " ",
      name: "B+H Architects",
      links: [
        {
          url: "https://bharchitects.com/en/studio/ho-chi-minh-city/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: OMG,
      position: " ",
      name: "OMGEVING",
      links: [
        {
          url: "https://omgeving.be/",
          icon: Website,
        },
      ],
    },
    {
      imageSrc: UNAI,
      position: " ",
      name: "United Nations Academic Impact",
      links: [
        {
          url: "https://academicimpact.un.org/",
          icon: Website,
        },
       ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};

export const notFound = ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  return (
    <Container tw="flex flex-col items-center justify-center h-screen">
      <ContentWithPaddingXl>
        <HeadingContainer className="text404" tw="flex-grow">
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading tw="xl:text-6xl ">{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

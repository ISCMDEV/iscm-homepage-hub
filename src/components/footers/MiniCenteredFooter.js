import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import logo from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as Linkedin } from "../../images/linkedin.svg";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
const FooterTabs = tw.div`font-medium lg:text-xl xl:text-xl`;

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
// const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Links = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`inline-block mx-4 text-gray-100 transition duration-300 cursor-pointer hover:text-gray-500`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
  return (
    <Container id="footer">
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            {/* <LogoText>ISCM</LogoText> */}
          </LogoContainer>
          <br />
          <SubheadingBase>
            INSTITUTE OF SMART CITY AND MANAGEMENT
          </SubheadingBase>
          <LinksContainer>
            <Link to="/">
              <Links>Home</Links>
            </Link>
            <Link to="/about">
              <Links>About</Links>
            </Link>
            <Link to="/newsandevents">
              <Links>News & Events</Links>
            </Link>
            <Link to="/research-development">
              <Links>R & D</Links>
            </Link>
            <Link to="/studiolab">
              <Links>StudioLab</Links>
            </Link>
            <Links to="/education">
              <Links>Education</Links>
            </Links>
            <Link to="/people">
              <Links>People</Links>
            </Link>
          </LinksContainer>
          <br />
          <FooterTabs>Contacts</FooterTabs>
          <LinksContainer style={{ marginTop: "1rem" }}>
            <Links>Address: 232/6 Võ Thị Sáu, P. Võ Thị Sáu, Quận 3</Links>
            <Links>Telephone: 028.39309589 - 028.39309269</Links>
            <Links>
              Email:
              <a classname="contact-mail" href="iscm@ueh.edu.vn">
                {" "}
                iscm@ueh.edu.vn
              </a>
            </Links>
            <Links>
              Website:
              <a classname="contact-website" href="iscm.ueh.edu.vn">
                {" "}
                iscm.ueh.edu.vn
              </a>{" "}
            </Links>
            <Links>
              Fanpage:{" "}
              <a classname="contact-socialmedia" href="facebook/iscm.ueh">
                {" "}
                facebook/iscm.ueh
              </a>
            </Links>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/ISCM.ueh">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/iscm-ueh">
              <Linkedin />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCtoJ5ZFc9yLiPFRY_UcIoBg">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, ISCM. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};

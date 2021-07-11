import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { handleForm } from "../misc/Formhandle";
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;
const NavLink = tw(NavLinkBase)`
  sm:text-base sm:mx-6 cursor-pointer
`;

// Dropdown part of navbar header
const Dropdown = tw.div`
  absolute mt-1 
`;

const NavDropdownContent = styled(NavLink)`
  // on hover of navlink
  ${NavLink}:hover & {
    display: block;
    margin: 0;
  }
  //styling of dropdown elements
  ${tw`relative hidden bg-white z-30 p-4`}
`;

const NavDropdownContentTesting = styled(NavLink)`
  // on hover of navlink
  ${NavLink}:hover & {
    display: block;
    margin: 0;
    background-color: white;
    z-index: 100;
    text-align: center;
  }
  //styling of dropdown elements
  ${tw`relative hidden bg-black z-30 p-4`}
`;

const Container = tw.div`relative `;
const FlexSettings = tw.div`flex lg:flex-row bg-gray-100 justify-center`;
const PaddingAndMargin = tw.div` mt-0 xl:pl-10 py-8`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="#overview">OVERVIEW</NavLink>
      <NavLink href="#timeline">TIMELINE</NavLink>
      <NavLink href="#prize">PRIZE</NavLink>
      <NavLink href="#register">REGISTER</NavLink>
      <NavLink href="#partners">PARTNERS</NavLink>
      <NavLink href="#footer">CONTACTS</NavLink>
    </NavLinks>,
  ],
}) => (
  <Container>
    <FlexSettings>
      <PaddingAndMargin>
        <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
      </PaddingAndMargin>
    </FlexSettings>
  </Container>
);

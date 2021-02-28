import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from "react-router-dom";
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
  sm:text-base sm:mx-6
`;
 
const NavLink2 = tw.a`
  sm:flex-none sm:text-base sm:mx-6
  rounded-sm px-3 py-1 hover:bg-gray-100 
`;

const NavLinks2 = tw.ul`
inline-block bg-black flex-none
mx-auto
`;

// Dropdown part of navbar header
const Dropdown = tw.div`
  absolute mt-1 
`;

const DropdownGroup = tw.div`
  absolute mt-1 left-auto h-auto w-auto
`;

const Dropdown2 = tw.div`
  absolute 
  w-auto 
  bg-gray-100
  md:flex-none
`;

const Dropdown3 = styled(Dropdown)`
  right: -35px;
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
    background-color:white;
    z-index:100;
    text-align:center;
  }
  //styling of dropdown elements
  ${tw`relative hidden bg-black z-30 p-4`}
`;


const NavDropdownContent2 = styled(NavDropdownContent)`
  hover & {
    display: hidden;
    margin: 0;
    left: 10px;
  }
  ${tw`relative hidden bg-black z-30 p-4`}
`;

const Container = tw.div`relative `;
const FlexSettings = tw.div`flex lg:flex-row bg-gray-100 justify-center`;
const PaddingAndMargin = tw.div` mt-0 xl:pl-10 py-8`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <Link to="/about">
        <NavLink>
          About
          <Dropdown>
            <NavDropdownContent>Overview</NavDropdownContent>
            <Link to="/network">
            <NavDropdownContent>Network
                <Link to="/collaborators">
                  <NavDropdownContentTesting>Higher Education</NavDropdownContentTesting>
                </Link>
                <Link to="/collaborators">
                  <NavDropdownContentTesting>NGOs</NavDropdownContentTesting>
                </Link>
                <Link to="/collaborators">
                  <NavDropdownContentTesting>Authorities</NavDropdownContentTesting>
                </Link>
                <Link to="/collaborators">
                  <NavDropdownContentTesting>Companies</NavDropdownContentTesting>
                </Link>
              </NavDropdownContent>
            </Link>
          </Dropdown>
        </NavLink>
      </Link>
      <Link to="/newsandevents">
        <NavLink>News & Events</NavLink>
      </Link>
      <Link to="/studiolab">
        <NavLink>StudioLab</NavLink>
      </Link>
      <Link to="/research-development">
        <NavLink>R&D</NavLink>
      </Link>
      <Link to="/people/">
        <NavLink tw="relative">
          People
          <Dropdown3>
            <Link to="/people/tuanh">
              <NavDropdownContent>Leaders
                <NavLinks2>
                  <Link to="/advisoryboard">
                      <NavDropdownContentTesting>Advisory Board</NavDropdownContentTesting>
                  </Link>
                  <Link to="/people/tuanh">
                    <NavDropdownContentTesting>Leader</NavDropdownContentTesting>
                  </Link>
                </NavLinks2>
              </NavDropdownContent>
            </Link>
            <Link to="/people">
              <NavDropdownContent>Members
                <NavLinks2>
                  <Link to="/coremembers">
                    <NavDropdownContentTesting>Core Members</NavDropdownContentTesting>
                  </Link>
                  <Link to="/adjunctprofs">
                    <NavDropdownContentTesting>Adjunct Proffessors</NavDropdownContentTesting>
                  </Link>
                  <Link to="/collaborators">
                    <NavDropdownContentTesting>Expert Networks</NavDropdownContentTesting>
                  </Link>
                </NavLinks2>  
              </NavDropdownContent>              
            </Link>
          </Dropdown3>
        </NavLink>
      </Link>
      <Link to="/education">
        <NavLink tw="relative">
          Education
          <Dropdown3>
            <Link to="/undergrads">
              <NavDropdownContent>Undergraduate</NavDropdownContent>{" "}
            </Link>
            <Link to="/postgrads">
              <NavDropdownContent>Post-graduate</NavDropdownContent>
            </Link>
            <Link to="/shortcourses">
              <NavDropdownContent>Short-courses</NavDropdownContent>
            </Link>
            <Link onClick={handleForm}>
              <NavDropdownContent>Admission</NavDropdownContent>
            </Link>
          </Dropdown3>
        </NavLink>
      </Link>
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

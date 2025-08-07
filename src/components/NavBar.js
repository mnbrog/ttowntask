import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const NavContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--white);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoWrapper = styled(Link)`
  display: block;
  width: 180px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 150px;
    margin-bottom: 0;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--dark-grey);
  text-decoration: none;
  font-weight: 600; /* Added for semi-bold text */
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    color: var(--white);
    background: var(--primary-color);
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: var(--dark-grey);
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownLink = styled(NavLink)`
  display: block;
  width: 100%;
  text-align: left;
  border-radius: 0;
`;

const LocationLink = styled.div`
  color: var(--dark-grey);
  text-decoration: none;
  font-weight: 600; /* Added for semi-bold text */
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--white);
    background: var(--primary-color);
  }
`;

const DesktopNav = styled(NavLinks)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 115px;
    left: 0;
    width: 100%;
    background: var(--white);
    padding: 1rem 0;
    box-shadow: var(--shadow);
    align-items: center;
  }
`;

const MobileDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MobileDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "NEW SCC LOGO (2).png" }) {
        childImageSharp {
          gatsbyImageData(width: 180, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);

  return (
    <NavContainer>
      <LogoWrapper to="/">
        <GatsbyImage image={logoImage} alt="Sheffield's Collision Center Logo" />
      </LogoWrapper>

      <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      {/* --- Desktop Navigation (Now correctly hidden on mobile) --- */}
      <DesktopNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <Dropdown>
          <LocationLink>Locations</LocationLink>
          <DropdownContent>
            <DropdownLink to="/sheffield-main">Columbus</DropdownLink>
            <DropdownLink to="/take-5">Midland</DropdownLink>
          </DropdownContent>
        </Dropdown>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </DesktopNav>

      {/* --- Mobile Navigation --- */}
      <MobileNavWrapper isOpen={isMenuOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <MobileDropdownContainer>
          <LocationLink onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
            Locations
          </LocationLink>
          <MobileDropdownContent isOpen={isMobileDropdownOpen}>
            <NavLink to="/sheffield-main">Columbus</NavLink>
            <NavLink to="/take-5">Midland</NavLink>
          </MobileDropdownContent>
        </MobileDropdownContainer>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </MobileNavWrapper>
    </NavContainer>
  );
};

export default NavBar;
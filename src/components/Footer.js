import React from 'react';
import styled from 'styled-components';

// The main footer container
const Foot = styled.footer`
  background: var(--dark-grey);
  color: var(--light-grey);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Adds space between the contact links and the copyright */
`;

// Container for the quick contact links
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap; /* Allows links to wrap on smaller screens */
`;

// Styling for each individual contact link
const ContactLink = styled.a`
  color: var(--white); /* White color for better contrast on dark background */
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8; /* Slight fade on hover for feedback */
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  /* This holds the copyright text */
`;

const Footer = () => (
  <Foot>
    <ContactContainer>
      <ContactLink href="https://maps.google.com/?q=Sheffield+Collision+Center" target="_blank" rel="noopener noreferrer">Map</ContactLink>
      <ContactLink href="tel:+17069400120">Call Us</ContactLink>
      <ContactLink href="mailto:scc1655@gmail.com">Email Us</ContactLink>
    </ContactContainer>
    <Copyright>
      © {new Date().getFullYear()} Sheffield's Collision Center. All rights reserved.
    </Copyright>
  </Foot>
);

export default Footer;
import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: var(--dark-grey);
  color: var(--light-grey);
  padding: 2rem;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  color: var(--white);
  a {
    color: var(--white);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <Foot>
    <ContactContainer>
      <ContactLink href="tel:+12056577554">Call or Text</ContactLink>
      <ContactLink href="mailto:ttowntask@gmail.com">Email Us</ContactLink>
    </ContactContainer>
    <Copyright>
      © {new Date().getFullYear()} T-Town Task.<br />
    </Copyright>
  </Foot>
);

export default Footer;
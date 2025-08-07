import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Hero styles
const HeroContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-areas: "hero";
`;

const HeroImage = styled(GatsbyImage)`
  grid-area: hero;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  grid-area: hero;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroText = styled.div`
  grid-area: hero;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
`;

// Contact form wrapper
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const ContactPage = () => {
  // Query for the hero image
  const data = useStaticQuery(graphql`
    query {
      contactHero: file(relativePath: { eq: "kgp-096.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const heroImage = getImage(data.contactHero);

  return (
    <Layout>
      <SEO title="Contact" description="Get in touch" />

      {/* Hero Section */}
      <HeroContainer>
        <HeroImage image={heroImage} alt="Contact us background" />
        <HeroOverlay />
        <HeroText>Get in Touch</HeroText>
      </HeroContainer>

      {/* Contact Content */}
      <ContactWrapper>
        <h1>Contact</h1>
        <ContactForm />
      </ContactWrapper>
    </Layout>
  );
};

export default ContactPage;

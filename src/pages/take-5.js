import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LocationCard from '../components/LocationCard';
import locations from '../../data/locations.json';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Styled Components
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

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Take5Page = () => {
  const take5Location = locations.find(loc => loc.name === "Midland Location");

  // Load hero image for Midland
  const data = useStaticQuery(graphql`
    query {
      midlandHero: file(relativePath: { eq: "kgp-035.jpg" }) {
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

  const heroImage = getImage(data.midlandHero);

  return (
    <Layout>
      <SEO title="Sheffield Midland Location" description="Visit us at our Sheffield Collision Center Midland Location" />

      {/* Hero Section */}
      <HeroContainer>
        <HeroImage image={heroImage} alt="Midland Location" />
        <HeroOverlay />
        <HeroText>Visit Our Midland Location</HeroText>
      </HeroContainer>

      {/* Page Content */}
      <PageWrapper>
        <h1>Midland Location</h1>
        {take5Location && <LocationCard location={take5Location} />}
      </PageWrapper>
    </Layout>
  );
};

export default Take5Page;

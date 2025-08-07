import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LocationCard from '../components/LocationCard';
import locations from '../../data/locations.json';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Styled components
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

const SheffieldMainPage = () => {
  const sheffieldMainLocation = locations.find(loc => loc.name === "Columbus Location");

  // Get the location image using Gatsby image query
  const data = useStaticQuery(graphql`
    query {
      locationHero: file(relativePath: { eq: "kgp-008.jpg" }) {
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

  const heroImage = getImage(data.locationHero);

  return (
    <Layout>
      <SEO title="Sheffield Main Location" description="Visit our main location at 123 Main St, Sheffield, AL." />

      {/* Hero Section */}
      <HeroContainer>
        <HeroImage image={heroImage} alt="Sheffield Columbus Location" />
        <HeroOverlay />
        <HeroText>Visit Our Columbus Location</HeroText>
      </HeroContainer>

      {/* Main Content */}
      <PageWrapper>
        <h1>Our Main Location</h1>
        {sheffieldMainLocation && <LocationCard location={sheffieldMainLocation} />}
      </PageWrapper>
    </Layout>
  );
};

export default SheffieldMainPage;

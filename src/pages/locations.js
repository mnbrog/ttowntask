import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LocationCard from '../components/LocationCard';
import locations from '../../data/locations.json';
import styled from 'styled-components';

// --- Import your image file ---
// The path must be relative to this component file.
// Adjust '../../assets/images/kgp-028.jpg' to match your project structure.
import heroBgImage from '../../images/kgp-028.jpg';


// --- Hero Section ---
// A responsive container for the hero image and text.
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 2rem;
  min-height: 50vh; // Use min-height for better responsiveness

  // Use the imported image variable in the url() function
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroBgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    min-height: 40vh;
  }
`;

// Title for the Hero section
const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Subtitle for the Hero section
const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// --- Locations Grid Section ---
// A wrapper to provide padding and context for the grid.
const LocationsContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem; // Increased gap for better spacing
`;


const LocationsPage = () => (
  <Layout>
    <SEO title="Locations" description="Find one of our locations near you." />

    <Hero>
      <HeroTitle>Our Locations</HeroTitle>
    </Hero>

    <LocationsContainer>
      <SectionHeader>Find Us</SectionHeader>
      <Grid>
        {locations.map(loc => (
          <LocationCard key={loc.name} location={loc} />
        ))}
      </Grid>
    </LocationsContainer>

  </Layout>
);

export default LocationsPage;
import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Wrapper = styled.section`
  display: grid;
  position: relative;
  color: var(--white);
  text-align: center;
`;

const BgImage = styled(GatsbyImage)`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  grid-area: 1/1;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroContent = styled.div`
  grid-area: 1/1;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Headline = styled.h1`
  margin: 0 0 1.5rem;
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// New: Button container for side-by-side layout
const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CTA = styled(Link)`
  background: var(--white);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "kgp-001.jpg" }) {
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

  const image = getImage(data.heroImage);

  return (
    <Wrapper>
      <BgImage image={image} alt="Professional auto body shop" />
      <Overlay />
      <HeroContent>
        <Headline>Collision Repair You Can Trust</Headline>
        <ButtonRow>
          <CTA to="/locations">Get Directions</CTA>
          <CTA to="/contact">Contact Us</CTA>
        </ButtonRow>
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;

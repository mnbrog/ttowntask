import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const HeroContainer = styled.div`
  display: grid;
  grid-template-areas: "hero";
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const HeroImage = styled(GatsbyImage)`
  grid-area: hero;
  width: 100%;
  height: 100%;
`;

const HeroContent = styled.div`
  grid-area: hero;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutWrapper = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 1rem auto;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "tttabout.png" }) {
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

  // Calculate the image's aspect ratio and the container height needed to match it
  const aspectRatio = image.height / image.width;
  const heroHeight = `calc(100vw * ${aspectRatio})`;

  return (
    <Layout>
      <SEO title="About Us" description="Learn about T-Town Task" />

      <HeroContainer style={{ height: heroHeight }}>
        <HeroImage 
          image={image} 
          alt="A person doing various tasks"
        />
        <HeroContent>
          <HeroTitle>No Job Too Small, We Do It All.</HeroTitle>
        </HeroContent>
      </HeroContainer>

      <AboutWrapper>
        <Section>
          <SectionTitle>About T-Town Task</SectionTitle>
          <p>
            T-Town Task is your go-to solution for getting things done in the community. Whether you're a busy student, a new homeowner, or just need an extra hand, our mission is to make your life easier by handling a wide range of tasks. From the heavy lifting of a move to the detailed work of assembling furniture, our team is committed to providing reliable, efficient, and stress-free service.
          </p>
          <p>
            We pride ourselves on being a versatile and trustworthy resource. We're here to tackle the jobs you don't have time for, ensuring everything is done to your satisfaction. Our team is dedicated to honest communication and a commitment to excellence, so you can always count on us to deliver quality work.
          </p>
        </Section>

        <Section>
          <SectionTitle>Our Promise</SectionTitle>
          <p>
            By agreeing to hire T-Town Task for any services, you acknowledge that T-Town Task, its owners, employees, and affiliates are not liable for any property damage, incomplete or faulty repairs, or any resulting injury to persons or surrounding areas. Our priority is to perform every task with the utmost care and professionalism, but this disclaimer outlines the limits of our liability.
          </p>
        </Section>
      </AboutWrapper>
    </Layout>
  );
};

export default AboutPage;
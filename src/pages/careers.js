import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import jobs from '../../data/jobs.json';

const HeroContainer = styled.div`
  display: grid; /* Use grid to layer image and content */
  position: relative;
  align-items: center;
  justify-items: center;
`;

const HeroImage = styled(GatsbyImage)`
  grid-area: 1/1; /* Place the image in the background */
  width: 100%;
  max-height: 400px;
`;

const HeroContent = styled.div`
  grid-area: 1/1; /* Place the content on top of the image */
  position: relative;
  z-index: 2;
  color: var(--white);
  text-align: center;
  /* Removed background, padding, and border-radius */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Added for readability */
`;

const CareersWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
`;

const CareersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "kgp-087.jpg" }) {
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
    <Layout>
      <SEO title="Careers" description="Work with us" />

      <HeroContainer>
        <HeroImage image={image} alt="Mechanic working on a car" />
        <HeroContent>
          <h1>Join Our Team</h1>
        </HeroContent>
      </HeroContainer>

      <CareersWrapper>
        <JobList jobs={jobs} />
        <SectionTitle>Apply Now</SectionTitle>
        <JobForm />
      </CareersWrapper>
    </Layout>
  );
};

export default CareersPage;
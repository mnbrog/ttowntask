import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import services from '../../data/services.json';

const HeroContainer = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  justify-items: center;
  /* Make height responsive to the screen size */
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
`;

const HeroImage = styled(GatsbyImage)`
  grid-area: 1/1;
  width: 100%;
  height: 100%; /* Make image fill the container */
`;

const HeroContent = styled.div`
  grid-area: 1/1;
  position: relative;
  z-index: 2;
  color: var(--white);
  text-align: center;
  padding: 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 background: rgba(0, 0, 0, 0.4); <-- This line was removed */
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-top: 1rem;
  line-height: 1.6;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
`;

const ServicesWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServicesPage = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "kgp-065.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, JPG]
                    )
                }
            }
        }
    `);

    const image = getImage(data.heroImage);

    return (
        <Layout>
            <SEO title="Services" description="Auto body and repair services for all makes and models." />

            <HeroContainer>
                <HeroImage image={image} alt="Professional auto repair services" />
                <HeroContent>
                    <PageTitle>Repair Services for ALL Makes & Models</PageTitle>
                    <PageSubtitle>
                        At Sheffield's Collision Center, we offer top-tier auto body repair services for all makes and models. Whether it's a minor dent or major collision damage, we’ve got the experience and expertise to get your vehicle back on the road in no time.
                    </PageSubtitle>
                </HeroContent>
            </HeroContainer>

            <ServicesWrapper>
                <Grid>
                    {services.map(service => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </Grid>
            </ServicesWrapper>
        </Layout>
    );
};

export default ServicesPage;
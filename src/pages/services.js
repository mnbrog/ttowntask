import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import services from '../../data/services.json';
import { FaTruckMoving, FaBroom, FaTools, FaSprayCan, FaLeaf, FaBoxOpen } from 'react-icons/fa';

const HeroContainer = styled.div`
  display: grid;
  position: relative;
  align-items: center;
  justify-items: center;
  height: 60vh;
  min-height: 400px;
  max-height: 600px;
`;

const HeroImage = styled(GatsbyImage)`
  grid-area: 1/1;
  width: 100%;
  height: 100%;
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
  background: rgba(0, 0, 0, 0.4);
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Map service titles to icons
const serviceIcons = {
  "Move-In / Move-Out Help": <FaTruckMoving />,
  "Cleaning Services": <FaBroom />,
  "Furniture Assembly / Wall Hanging": <FaTools />,
  "Pressure Washing": <FaSprayCan />,
  "Grass Cutting": <FaLeaf />,
  "Unpacking / Organizing": <FaBoxOpen />
};

const ServicesPage = () => {
    const data = useStaticQuery(graphql`
        query {
            heroImage: file(relativePath: { eq: "tttservice.png" }) {
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
            <SEO title="Services" description="A wide range of services to help with all your home tasks, big or small." />

            <HeroContainer>
                <HeroImage image={image} alt="T-Town Task Services" />
                <HeroContent>
                    <PageTitle>No Job Too Small, We Do It All</PageTitle>
                    <PageSubtitle>
From yard work, cleaning, and furniture assembly to junk removal, moving help, pressure washing, and small home repairs, we offer a full range of services to make life easier. Whether it’s heavy lifting or dirty work, we handle it all so you can focus on what matters most.                    </PageSubtitle>
                </HeroContent>
            </HeroContainer>

            <ServicesWrapper>
                <Grid>
                    {services.map(service => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={serviceIcons[service.title]}
                        />
                    ))}
                </Grid>
            </ServicesWrapper>
        </Layout>
    );
};

export default ServicesPage;
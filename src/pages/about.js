import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';
import team from '../../data/team.json';
import milestones from '../../data/milestones.json';

// The fixed height has been removed. Height will be set dynamically.
const HeroContainer = styled.div`
  display: grid;
  grid-template-areas: "hero";
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

// No background-color is needed as there will be no empty space.
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
  background: rgba(0, 0, 0, 0.25);
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

const OwnerCard = styled.div`
  background: var(--light-grey);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: left;

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "kgp-042.jpg" }) {
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

  // --- CHANGES ARE HERE ---
  // 1. Calculate the image's aspect ratio
  const aspectRatio = image.height / image.width;

  // 2. Calculate the container height needed to match the aspect ratio
  const heroHeight = `calc(100vw * ${aspectRatio})`;

  return (
    <Layout>
      <SEO title="About Us" description="Learn about Sheffield Collision Center" />

      {/* 3. Apply the dynamic height as an inline style */}
      <HeroContainer style={{ height: heroHeight }}>
        {/* 4. The image now fits perfectly, so no extra props are needed */}
        <HeroImage 
          image={image} 
          alt="The Sheffield's Collision Center workshop"
        />
        <HeroContent>
          <HeroTitle>Our Story</HeroTitle>
        </HeroContent>
      </HeroContainer>

      <AboutWrapper>
        <Section>
          <SectionTitle>Who We Are</SectionTitle>
          <p>
            Sheffield's Collision Center was founded in 2019 with a clear mission: to provide the highest quality auto body repair and customer service in the Columbus, Georgia area. While our shop may be relatively new, our roots in the auto body industry run deep; with over 35 years of combined experience, our team brings a wealth of knowledge, craftsmanship, and passion to every vehicle we service.
          </p>
          <p>
            We understand how important your vehicle is to your daily life, and we treat every car like it’s our own. Each member of our team undergoes rigorous, hands-on training to meet our high standards of quality. It’s not just about fixing cars; it’s about earning your trust and delivering peace of mind.
          </p>
          <p>
            At Sheffield’s, our reputation is everything. We pride ourselves on honest communication, expert workmanship, and a commitment to excellence that shows in every job we complete. Leave your car with professionals who truly care, and who have the experience to prove it.
          </p>
        </Section>

        <Section>
          <SectionTitle>About the Owner</SectionTitle>
          <OwnerCard>
            <h3>Thurston Sheffield</h3>
            <p>
              Thurston Sheffield, owner of Sheffield's Collision Center, began his career in auto repair at just 19 years old. With a strong foundation in both hands-on repair and insurance adjusting, he brings a unique and valuable perspective to the collision repair process. Over the past 35 years, Thurston has built a reputation for integrity, hard work, and a relentless drive for improvement.
            </p>
            <p>
              His background in insurance adjusting allows him to navigate the repair process with efficiency and transparency, always advocating for the best outcome for his customers. While his experience is vast, Thurston remains a lifelong learner, continually adapting to changes in technology and industry standards. His leadership and commitment to excellence are at the core of everything we do at Sheffield’s, ensuring every customer leaves satisfied and confident in the work we've done.
            </p>
          </OwnerCard>
        </Section>
      </AboutWrapper>
    </Layout>
  );
};

export default AboutPage;
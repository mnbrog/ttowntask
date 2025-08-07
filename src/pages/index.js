import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ReviewCarousel from '../components/ReviewCarousel';
import QuickContactBar from '../components/QuickContactBar';
import SEO from '../components/SEO';
import reviews from '../../data/reviews.json';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="No Job Too Small, We do it All." />
    <Hero />
    <ReviewCarousel reviews={reviews} />
    
  </Layout>
);

export default IndexPage;

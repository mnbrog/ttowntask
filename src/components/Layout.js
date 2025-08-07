import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #045990; /* A deeper, more modern teal */
    --secondary-color: #98b5f1;
    --dark-grey: #333;
    --light-grey: #f5f5f5;
    --white: #fff;
    --shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  body {
    margin: 0;
    font-family: 'Quicksand', 'Inter', 'Open Sans', sans-serif;
    background: var(--white);
    color: var(--dark-grey);
  }

  h1, h2, h3 {
    font-weight: 600;
  }
`;

// This new container will wrap your entire site
const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set the minimum height to 100% of the viewport height */
`;

// We'll replace the <main> tag with this styled version
const MainContent = styled.main`
  flex: 1; /* This crucial line makes the content area grow to fill all available space */
`;


const Layout = ({ children }) => (
  <SiteContainer>
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-X7N99R0TW1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-X7N99R0TW1');
      `,
        }}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <NavBar />
    <MainContent>{children}</MainContent>
    <Footer />
  </SiteContainer>
);

export default Layout;

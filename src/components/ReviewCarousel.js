import React from 'react';
import styled from 'styled-components';
import logo from '../../images/NEW SCC LOGO (2).png'; // Adjust path if needed

const Wrapper = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--light-grey);
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  /* --- RESPONSIVE CHANGES HERE --- */
  width: 80vw;           /* On small screens, card is 80% of viewport width */
  max-width: 300px;      /* On larger screens, it won't exceed 300px */
  min-height: 350px;     /* Changed from fixed height to allow card to grow */
  
  background: var(--white);
  border-radius: 15px;
  box-shadow: var(--shadow);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* Add flex-shrink to prevent card from squishing on some devices */
  flex-shrink: 0;
`;

const StarsAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stars = styled.div`
  font-size: 1.75rem;
  color: #f5a623;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  width: 130px;
`;

const ReviewCarousel = ({ reviews }) => (
  <Wrapper>
    {reviews.map((rev, idx) => (
      <Card key={idx}>
        <div>
          <p>"{rev.text}"</p>
        </div>
        <StarsAndLogo>
          <strong>- {rev.author}</strong>
          <Stars>★★★★★</Stars>
          <Logo src={logo} alt="Brand logo" />
        </StarsAndLogo>
      </Card>
    ))}
  </Wrapper>
);

export default ReviewCarousel;
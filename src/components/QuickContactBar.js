import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  flex-wrap: wrap;
`;

const Item = styled.a`
  color: #045990;
  text-decoration: none;
  font-weight: 600;
`;

const QuickContactBar = () => (
  <Bar>
    <Item href="https://maps.google.com/?q=Sheffield+Collision+Center">Map</Item>
    <Item href="tel:+17069400120">(706) 940-0120</Item>
    <Item href="mailto:scc1655@gmail.com">Email Us</Item>
  </Bar>
);

export default QuickContactBar;

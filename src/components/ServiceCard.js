import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Card = styled.div`
  background: var(--white);
  border-radius: 15px;
  box-shadow: var(--shadow);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: var(--primary-color);
`;

const ServiceCard = ({ image, title, description }) => (
  <Card>
    {image && <GatsbyImage image={getImage(image)} alt={title} />}
    <Title>{title}</Title>
    <p>{description}</p>
  </Card>
);

export default ServiceCard;
import React from 'react';
import styled from 'styled-components';
import { FaTruckMoving, FaBroom, FaTools, FaSprayCan, FaLeaf, FaBoxOpen } from 'react-icons/fa';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: .5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content to the top */
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  color: var(--primary-color);
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--dark-grey);
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: var(--mid-grey);
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1; /* Allows the description to fill the remaining space */
  font-weight: normal;
  `;

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ServiceCard;
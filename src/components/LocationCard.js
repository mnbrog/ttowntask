import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
`;

const InfoText = styled.p`
  margin: 0.25rem 0;
  color: #666;
  line-height: 1.5;
`;

// A styled anchor tag for clickable phone numbers and addresses
const InfoLink = styled.a`
  margin: 0.25rem 0;
  color: #007bff;
  text-decoration: none;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
`;

const LocationCard = ({ location }) => {
  // Create a URL-friendly version of the address for Google Maps
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

  // Create a phone-call-friendly URI by removing non-numeric characters
  const phoneUrl = `tel:${location.phone.replace(/\D/g, '')}`;

  return (
    <Card>
      <Title>{location.name}</Title>

      {/* The address is now a link that opens in a new tab */}
      <InfoLink href={mapUrl} target="_blank" rel="noopener noreferrer">
        {location.address}
      </InfoLink>

      {/* The phone number is now a link that initiates a call */}
      <InfoLink href={phoneUrl}>
        {location.phone}
      </InfoLink>
      
      <InfoText>{location.hours}</InfoText>
    </Card>
  );
};

export default LocationCard;
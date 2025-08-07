import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: teal;
    border-radius: 50%;
  }
`;

const Timeline = ({ events }) => (
  <Wrapper>
    {events.map(event => (
      <Item key={event.year}>
        <strong>{event.year}:</strong> {event.text}
      </Item>
    ))}
  </Wrapper>
);

export default Timeline;

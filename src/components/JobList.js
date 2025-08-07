import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 1rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 1rem;
`;

const JobList = ({ jobs }) => (
  <List>
    {jobs.map(job => (
      <Item key={job.id}>
        <h3>{job.title}</h3>
        <p>{job.description}</p>
      </Item>
    ))}
  </List>
);

export default JobList;

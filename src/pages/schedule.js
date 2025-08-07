import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`;

const ScheduleHeader = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--dark-grey);
  margin-bottom: 2rem;
`;

const SchedulerWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SchedulePage = () => {
  return (
    <Layout>
      <SEO title="Schedule an Appointment" description="Book your T-Town Task appointment online." />
      <ScheduleContainer>
        <ScheduleHeader>Schedule Your Appointment</ScheduleHeader>
        <Subtitle>
          Ready to get started? Use our online scheduler to book your next service with T-Town Task.
        </Subtitle>
        <SchedulerWrapper>
          <iframe
            src="https://app.squarespacescheduling.com/schedule.php?owner=df169624"
            width="100%"
            height="800"
            frameBorder="0"
            title="Scheduling Appointment"
          ></iframe>
        </SchedulerWrapper>
      </ScheduleContainer>
    </Layout>
  );
};

export default SchedulePage;
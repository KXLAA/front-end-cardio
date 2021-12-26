import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  width: 740px;
  grid-template-columns: repeat(4, 1fr);
  background-color: #1d1c1c;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 4rem;
  gap: 16px;
  grid-template-areas:
    'commit projects ongoing'
    'courses courses learning';
`;

const Card = styled.div`
  background-color: #101010;
  padding: 16px;
  border-radius: 16px;
  height: 200px;
  grid-area: ${(props) => props.area};
`;

const CardSection = styled.div`
  display: flex;
  gap: 24px;
`;

const Stats = () => {
  return (
    <Container>
      {/* <h1>CURRENT STATS</h1> */}
      <Card area="commit">
        <p>First Commit: </p>
      </Card>

      <Card area="projects">
        <p>First Commit: </p>
      </Card>

      <Card area="ongoing">
        <p>First Commit: </p>
      </Card>

      <Card area="courses">
        <p>First Commit: </p>
      </Card>

      <Card area="learning">
        <p>First Commit: </p>
      </Card>

      {/* <p>Number of Completed Projects: </p>
      <p>Completed online courses: </p>
      <p>Ongoing courses: </p>
      <p>Currently Learning: </p>
      <p>Planing to learn: </p>
      <p>Favorite Technology: </p>
      <p>Status: </p>
      <p>Total Hours spent Coding: </p> */}
    </Container>
  );
};

export default Stats;

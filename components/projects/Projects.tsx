import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const Card = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: #161616;
  border-radius: 16px;
`;

const Header = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`;

const Indicators = styled.div`
  border-radius: 100px;
  width: 20px;
  height: 20px;
  background-color: yellow;
`;

const Tech = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: 700;

  span {
    color: yellow;
  }
`;

const Description = styled.div`
  padding: 24px;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: yellow;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 24px;
  a {
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: solid 2px yellow;
    transition: all 0.3s ease;
    &:hover {
      border-color: #39ff14;
    }
  }
`;

const Projects = () => {
  return (
    <Container>
      <Card>
        <Header>
          <Indicators />
          <Tech>
            <p>HTML</p>
            <span>*</span>
            <p>CSS</p>
            <span>*</span>
            <p>JAVASCRIPT</p>
          </Tech>
        </Header>
        <Image
          src="/fiber-landing-page.gif"
          alt="Picture of the author"
          width={1400}
          height={900}
          layout="responsive"
        />
        <Description>
          <h2>Fiber Landing Page.</h2>
          <Links>
            <a href="/">Code</a>
            <a href="/">Demo</a>
          </Links>
        </Description>
      </Card>
    </Container>
  );
};

export default Projects;

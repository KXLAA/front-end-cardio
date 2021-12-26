import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  p {
    font-size: 2rem;
    font-weight: 300;
  }
`;

const Count = styled.div`
  background-color: #161616;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 16px;
  width: 200px;
  aspect-ratio: 1/1;
  font-weight: 700;
  align-items: center;
  justify-content: center;
`;

const Number = styled.p`
  font-size: 5rem;
  line-height: 1;
`;

const Text = styled.p`
  font-size: 2rem;
`;

const Highlight = styled.span`
  background-color: yellow;
  color: #101010;
  padding: 4px;
  font-weight: 700;
  transition: all 0.3s ease;
  &:hover {
    background-color: #39ff14;
  }
`;

const Kola = styled.a`
  border-bottom: solid 2px yellow;
  font-weight: 700;
`;

const Header = ({ length }) => {
  return (
    <>
      <Container>
        <Title>
          <h1>
            WELCOME TO <Highlight>FRONTEND CARDIO</Highlight>
            {` `}
          </h1>
          <p>
            <Kola href="https://kxlaa.com/" target="_blank">{`KOLA'S`}</Kola>
            {` `}
            CATALOGUE OF PROJECTS, CHALLENGES & EXPERIMENTS
          </p>
        </Title>
        <Count>
          <Number>{length}</Number>
          <Text>PROJECTS</Text>
        </Count>
      </Container>
    </>
  );
};

export default Header;

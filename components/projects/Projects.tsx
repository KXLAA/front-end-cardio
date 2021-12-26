import React from 'react';
import styled from 'styled-components';
import { ProjectsProps } from 'types/types';

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

const Projects = ({ projects }: ProjectsProps) => {
  console.log(projects);

  return (
    <Container>
      {projects.map((project) => (
        <Card key={project.id}>
          <Header>
            <Indicators />
            <Tech>
              {project.category.map((cata) => (
                <>
                  <p>{cata}</p>
                  <span>*</span>
                </>
              ))}
            </Tech>
          </Header>

          <video autoPlay loop muted>
            <source src={project.demowebm.url} type="video/webm" />
            <source src={project.demomp4.url} type="video/mp4" />
          </video>

          <Description>
            <h2>{project.name}</h2>
            <Links>
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Demo
              </a>
            </Links>
          </Description>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;

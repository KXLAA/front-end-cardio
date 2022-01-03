import React from 'react';
import styled from 'styled-components';
import { ProjectsProps } from 'types/types';
import device from 'components/common/MediaQueries';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media ${device.laptopS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: #161616;
  border-radius: 16px;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  padding-bottom: 1.5rem;
  box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
`;

const Header = styled.div`
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  color: yellow;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Tech = styled.div`
  display: flex;
  gap: 0.8rem;
  font-weight: 700;
  padding-bottom: 0.5rem;

  @media ${device.mobileS} {
    display: none;
  }
`;

const Tag = styled.div`
  display: flex;
  padding: 4px 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #ffffff;
  background: #222222;
  width: fit-content;

  @media ${device.laptop} {
    font-size: 0.7rem;
  }

  @media ${device.tablet} {
    font-size: 0.55rem;
  }

  @media ${device.mobile} {
    font-size: 0.6rem;
  }
`;

const Description = styled.div`
  padding: 24px;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: yellow;

    @media ${device.laptop} {
      font-size: 2rem;
    }

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
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
    @media ${device.laptop} {
      font-size: 1.2rem;
    }

    @media ${device.tablet} {
      font-size: 1.3rem;
    }
    &:hover {
      color: yellow;
    }
  }
`;

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Container>
      {projects.map((project) => (
        <Card key={project.id}>
          <Header>⌘</Header>

          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <video autoPlay loop muted poster={project.poster.url}>
              <source src={project.demowebm.url} type="video/webm" />
              <source src={project.demomp4.url} type="video/mp4" />
            </video>
          </a>

          <Description>
            <Tech>
              {project.category.map((cata) => (
                <Tag key={cata}>{cata}</Tag>
              ))}
            </Tech>

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

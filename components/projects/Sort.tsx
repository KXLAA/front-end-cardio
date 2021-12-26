import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 1.5rem;
  padding-bottom: 2rem;
  -webkit-overflow-scrolling: touch;
  margin: 0 -1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tags = styled.button`
  transition: all 0.3s ease;
  height: fit-content;
  width: 100%;
  font-weight: 500;
  font-size: 2rem;
  padding: 0px 16px;
  color: #e4e4e4;
  border: 2px solid;
  border-radius: 100px;
  cursor: pointer;
  background: none;
  &:hover:not(:disabled),
  &:disabled:not(:disabled),
  &:focus {
    transform: translateX(0rem) translateY(-0.125rem);
    background: #e4e4e4;
    color: #101010;
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

const Sort = () => {
  return (
    <Container>
      <Tags>OLDEST</Tags>
      <Tags>LATEST</Tags>
      <Tags>REACT</Tags>
      <Tags>NEXT.JS</Tags>
      <Tags>GRAPHQL</Tags>
      <Tags>NODE.JS</Tags>
      <Tags>JAVASCRIPT</Tags>
      <Tags>TYPESCRIPT</Tags>
      <Tags>HTML</Tags>
      <Tags>CSS</Tags>
      <Tags>SCSS</Tags>
      <Tags>ALL</Tags>
    </Container>
  );
};

export default Sort;

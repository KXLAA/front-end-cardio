import styled from 'styled-components';

const LayoutStyled = styled.main`
  max-width: 1940px;
  margin: 0 auto;
  padding: 4rem;
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

const Layout = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;

import styled from 'styled-components';
import device from './MediaQueries';

const LayoutStyled = styled.main`
  max-width: 1940px;
  margin: 0 auto;
  padding: 4rem;
  padding-top: 7rem;
  padding-bottom: 7rem;

  @media ${device.laptopS} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${device.tablet} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media ${device.mobile} {
    padding: 2rem 1rem;
  }

  @media ${device.mobileS} {
    padding: 2rem 1rem;
  }
`;

const Layout = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;

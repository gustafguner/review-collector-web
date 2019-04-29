import * as React from 'react';
import styled from 'styled-components';
import { colors, Container } from '../styles';
import { Link } from 'gatsby';
import Image from './image';

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 54px;
  height: 54px;
  margin-right: 14px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  color: ${colors.WHITE};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.16rem;
`;

const Header: React.FC<{}> = () => (
  <>
    <Wrapper>
      <StyledContainer>
        <Link to="/">
          <LogoContainer>
            <Logo>
              <Image src="favicon.png" />
            </Logo>
            <Name>Review Collector</Name>
          </LogoContainer>
        </Link>
      </StyledContainer>
    </Wrapper>
  </>
);

export default Header;

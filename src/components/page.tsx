import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../utils/globalStyles';
import { colors } from '../styles';
import Header from './header';

const Container = styled.div`
  width: 100%;
`;

const Page: React.FC<{}> = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header />
    {children}
  </Container>
);

export default Page;

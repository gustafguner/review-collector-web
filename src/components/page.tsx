import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../utils/globalStyles';

const Container = styled.div`
  width: 100%;
`;

const Page: React.FC<{}> = ({ children }) => (
  <Container>
    <GlobalStyles />
    {children}
  </Container>
);

export default Page;

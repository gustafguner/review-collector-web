import * as React from 'react';
import SEO from '../components/seo';
import Page from '../components/page';
import styled from 'styled-components';
import { colors, Container } from '../styles';

const NotFound = () => (
  <Page>
    <SEO title="Page not found" />
    <Container>
      <h1>404 Not found</h1>
    </Container>
  </Page>
);

export default NotFound;

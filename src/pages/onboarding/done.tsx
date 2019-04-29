import * as React from 'react';
import SEO from '../../components/seo';
import Page from '../../components/page';
import styled from 'styled-components';
import { colors, Container } from '../../styles';

const OnboardingGitHub = ({ ...props }) => {
  return (
    <Page>
      <SEO title="Onboarding done" />
      <Container>
        <h1>Success 🎉</h1>
      </Container>
    </Page>
  );
};

export default OnboardingGitHub;

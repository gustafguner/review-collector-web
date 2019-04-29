import * as React from 'react';
import * as qs from 'query-string';
import SEO from '../../components/seo';
import Page from '../../components/page';
import styled from 'styled-components';
import { colors, Container } from '../../styles';
import AddToGitHub from '../../components/add-to-github';

const OnboardingGitHub = ({ ...props }) => {
  const id = qs.parse(props.location.search).id;
  return (
    <Page>
      <SEO title="GitHub Onboarding" />
      <Container>
        <h1>Step 2: GitHub Authentication</h1>
        <AddToGitHub
          href={`https://github.com/login/oauth/authorize?client_id=9dbe9ded7f285094d396&scope=repo%20scope&redirect_uri=http://localhost:4000/github/oauth2/redirect?id=${id}`}
        />
      </Container>
    </Page>
  );
};

export default OnboardingGitHub;

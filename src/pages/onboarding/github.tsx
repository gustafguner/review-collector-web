import * as React from 'react';
import * as qs from 'query-string';
import { Link } from 'gatsby';
import SEO from '../../components/seo';

const OnboardingGitHub = ({ ...props }) => {
  const id = qs.parse(props.location.search).id;
  return (
    <>
      <SEO title="GitHub Onboarding" />
      <h1>Step 2: GitHub Auth</h1>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=9dbe9ded7f285094d396&scope=repo%20scope&redirect_uri=http://localhost:4000/github/oauth2/redirect?id=${id}`}
      >
        Add to GitHub
      </a>
    </>
  );
};

export default OnboardingGitHub;

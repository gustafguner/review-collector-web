import * as React from 'react';
import SEO from '../components/seo';
import Page from '../components/page';
import Image from '../components/image';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 220px;
  height: 220px;
  margin-right: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 40px 0;
`;

const IndexPage = () => (
  <Page>
    <SEO title="Review Collector" />
    <Container>
      <LogoContainer>
        <Logo>
          <Image src="review-collector-logo.png" />
        </Logo>
        <h1>Review Collector</h1>
      </LogoContainer>

      <a href="https://slack.com/oauth/authorize?scope=commands,bot,chat:write:bot,im:write&client_id=600818133427.600894270546">
        <img
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
        />
      </a>
    </Container>
  </Page>
);

export default IndexPage;

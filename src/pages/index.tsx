import * as React from 'react';
import SEO from '../components/seo';
import Page from '../components/page';
import styled from 'styled-components';
import { colors, Container } from '../styles';
import slackMessage from '../assets/images/slack-message.png';
import AddToSlack from '../components/add-to-slack';

const Landing = styled.div`
  padding: 6rem 0;
`;

const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
`;

const LandingColumns = styled.div`
  margin: 0 -2rem;
  display: flex;
`;

const LandingColumn = styled.div`
  width: calc(50% - 4rem);
  margin: 0 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const Headline = styled.h2`
  font-size: 3rem;
  color: ${colors.WHITE};
  margin: 0 0 2rem 0;
`;

const SlackMessage = styled.div`
  padding: 1.2rem 1rem;
  background: ${colors.WHITE};
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const IndexPage = () => (
  <Page>
    <SEO title="Review Collector" />
    <Landing>
      <StyledContainer>
        <LandingColumns>
          <LandingColumn>
            <Headline>Get your pull requests merged in no time</Headline>
            <AddToSlack href="https://slack.com/oauth/authorize?scope=commands,bot,chat:write:bot,im:write&client_id=600818133427.600894270546" />
          </LandingColumn>
          <LandingColumn>
            <SlackMessage>
              <img src={slackMessage} />
            </SlackMessage>
          </LandingColumn>
        </LandingColumns>
      </StyledContainer>
    </Landing>
  </Page>
);

export default IndexPage;

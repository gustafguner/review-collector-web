import * as React from 'react';
import SEO from '../components/seo';
import Page from '../components/page';
import Image from '../components/image';
import styled from 'styled-components';
import { colors, Container } from '../styles';
import slackMessage from '../assets/images/slack-message.png';

const Landing = styled.div`
  height: 440px;
  display: flex;
  margin: 0 -2rem;
`;

const StyledContainer = styled(Container)`
  display: flex;
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
  padding: 15px;
  background: ${colors.WHITE};
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Info = styled.div`
  background-color: ${colors.DARK_BROW};
  width: 100%;
  height: 200px;
`;

const IndexPage = () => (
  <Page>
    <SEO title="Review Collector" />
    <Landing>
      <StyledContainer>
        <LandingColumns>
          <LandingColumn>
            <Headline>Get your pull requests merged in time</Headline>
            <a href="https://slack.com/oauth/authorize?scope=commands,bot,chat:write:bot,im:write&client_id=600818133427.600894270546">
              <img
                alt="Add to Slack"
                height="40"
                width="139"
                src="https://platform.slack-edge.com/img/add_to_slack@2x.png"
              />
            </a>
          </LandingColumn>
          <LandingColumn>
            <SlackMessage>
              <img src={slackMessage} />
            </SlackMessage>
          </LandingColumn>
        </LandingColumns>
      </StyledContainer>
    </Landing>

    <Info />
  </Page>
);

export default IndexPage;

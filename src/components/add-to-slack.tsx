import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Wrapper = styled.div`
  width: 186px;
  height: 60px;
  background: white;
  border-radius: 6px;
  &:hover {
    background-color: rgb(248, 248, 248);
  }
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
`;

const Svg = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 1rem;
`;

const Text = styled.div`
  color: ${colors.OFF_BLACK};
  font-weight: 700;
  font-size: 1.06rem;
`;

interface Props {
  href: string;
}

const AddToSlack: React.FC<Props> = ({ href }) => (
  <Wrapper>
    <a href={href}>
      <Svg viewBox="0 0 60 60">
        <path
          d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986"
          fill="#36c5f0"
        />
        <path
          d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985"
          fill="#2eb67d"
        />
        <path
          d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985"
          fill="#ecb22e"
        />
        <path
          d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985"
          fill="#e01e5a"
        />
      </Svg>
      <Text>Add to Slack</Text>
    </a>
  </Wrapper>
);

export default AddToSlack;

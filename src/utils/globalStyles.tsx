import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors, fontFiles } from '../styles';

interface Font {
  url: string;
  weight: number;
  style: 'normal' | 'italic' | 'oblique';
}

const fonts: { [key: string]: Font[] } = {
  Larsseit: [
    {
      url: fontFiles.LarsseitLight,
      weight: 300,
      style: 'normal',
    },
    {
      url: fontFiles.LarsseitBook,
      weight: 400,
      style: 'normal',
    },
    {
      url: fontFiles.LarsseitMedium,
      weight: 500,
      style: 'normal',
    },
    {
      url: fontFiles.LarsseitBold,
      weight: 700,
      style: 'normal',
    },
  ],
};

const getFontFaces = () =>
  Object.keys(fonts).map((fontName: string) =>
    fonts[fontName].map(
      (font: Font) => `
    @font-face {
      font-family: "${fontName}";
      font-style: ${font.style};
      font-weight: ${font.weight};
      src: 
        url(${font.url}) format("woff");
    }
  `,
    ),
  );

export const GlobalStyles = createGlobalStyle`
  ${getFontFaces()}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Larsseit', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background: ${colors.BROWN};
    color: ${colors.WHITE};
  }
  img {
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 1.5rem 0 0.5rem;
    font-kerning: none;
  }
  h1 {
    margin-top: 0;
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
  }
`;

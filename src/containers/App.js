import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Pricedown from 'fonts/pricedown.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pricedown';
    src: url(${Pricedown});
  }
`;

const H1 = styled('h1')`
  font-family: Pricedown;
`;

export default () => (
  <div>
    <H1>Hello world</H1>
    <GlobalStyle />
  </div>
);

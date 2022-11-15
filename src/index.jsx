import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyle />
  </ThemeProvider>,
);

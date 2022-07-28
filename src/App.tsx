import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Router from '@routes/Router';
import GlobalStyle from './styles/GlobalStyles';
import Layout from '@layout/Layout';
import theme from '@styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

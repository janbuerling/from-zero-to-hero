import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import AppHeader from './app/AppHeader';
import AppPage from './app/AppPage';
import theme from '../assets/styles';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
    font-family: 'Roboto', sans-serif;
    
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <div className='app'>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router>
        <Route path='/' component={AppHeader} />
        <Route path='/' component={AppPage} />
      </Router>
    </ThemeProvider>
  </div>
);

export default App;

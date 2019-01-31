import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppPage from './app/AppPage';
import theme from '../assets/styles';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <ThemeProvider theme={theme}>
          <AppPage />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;

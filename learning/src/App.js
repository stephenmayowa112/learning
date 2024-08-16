// src/App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Feature from './components/Feature';
import ExploreTraining from './components/ExploreTraining';

const lightTheme = {
  backgroundColor: '#ffffff',
  textColor: '#333333',
  subtitleColor: '#666666',
  // Add more color variables as needed
};

const darkTheme = {
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  subtitleColor: '#cccccc',
  // Add more color variables as needed
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <Navbar onThemeToggle={toggleTheme} />
        <HeroSection />
        <Feature />
        <ExploreTraining />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
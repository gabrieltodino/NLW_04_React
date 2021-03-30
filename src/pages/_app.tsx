import React from 'react';
import Head from 'next/head'

import usePersistedState from '../utils/usePersistedState'

import light from '../styles/themes/light';
import dark from '../styles/themes/dark'; 
import { ThemeProvider } from 'styled-components';  

import GlobalStyle from '../styles/global';

import { LogInProvider } from  '../contexts/LogInContext'

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState(dark, 'theme');

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <GlobalStyle/>
        <LogInProvider>
          <Component {...pageProps} toggleTheme={toggleTheme}/>
        </LogInProvider>
    </ThemeProvider>
  );
};

export default MyApp;


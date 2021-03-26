import GlobalStyle from '../styles/global';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark'; 
import { ThemeProvider } from 'styled-components';  

import React from 'react';
import Head from 'next/head'

import usePersistedState from '../utils/usePersistedState'

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
        <Component {...pageProps} toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
};

export default MyApp;


import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';   

import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import usePersistedState from '../utils/usePersistedState'

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState(dark, 'theme');

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
};

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
};

export default MyApp;


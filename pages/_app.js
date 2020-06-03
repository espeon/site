import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import  '../styles.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = createMuiTheme({
  typography: {
    "fontFamily": "\"Inter\", \"Noto Sans JP\", \"Roboto\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 200,
    "fontWeightRegular": 300,
    "fontWeightMedium": 400,
   },
  palette: {
    type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

  return (
    <React.Fragment>
      <Head>
        <title>Emma L.</title>
        <meta name="Description" content="Put your description here." />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
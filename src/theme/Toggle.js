import React from 'react';
import "../styles/css-variables.scss";
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './colorModeContext';
import { Paper } from '@mui/material';

export default function  ToggleColorMode  (props) {
    const {children} = props;
    const [mode, setMode] = React.useState('light');
    const getDesignTokens = (mode) => ({
      palette: {
        mode,
        background: {
          ...(mode === 'dark'
            ? {
                footer: '#1c0040',
                paper: '#1c0040',
                main: '#4a148c',
                secondary: '#4a148c',
                light: '#5a18aa',
                info: '#5a18aa'
              }
            : {
                footer: '#eeeffb',
                paper: '#ffffff',
                main: '#f2f0ff',
                secondary: '#f1f0ff',
                light: '#f6f5ff',
                info: '#f9f8fe'
              }),
        },
        text: {
          ...(mode === 'light'
            ? {
                primary: '#151875', //text-color
                secondary: '#0d0e43',
                subTextColor: '#8a8fb9',
                hektoTitle: '#551a8b',
                textColor2: '#111c85',
                textColor3: 'rgba(26, 11, 91, 0.302)',
                cartTextColor: '#1d3178'
              }
            : {
                primary: '#FFFFFF',
                secondary: '#FFFFFF',
                subTextColor: '#FFFFFF',
                hektoTitle: '#FFFFFF',
                textColor2: '#FFFFFF',
                textColor3:  'rgba(192,192,192,0.3)',
                cartTextColor: '#FFFFFF'
              }),
        },
      },
    });

    
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme(getDesignTokens(mode)),
      [mode],
    );
    
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Paper style={{height: "100%"}}>
                    {children}
                </Paper>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
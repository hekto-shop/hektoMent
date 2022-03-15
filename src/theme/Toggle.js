import React from 'react';
import "../styles/css-variables.scss";

import {  ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './colorModeContext';
import { amber, deepOrange, grey, green, blue, yellow} from '@mui/material/colors';
import { Paper } from '@mui/material';
export default function  ToggleColorMode  (props) {
    
    const {children} = props;
    const [mode, setMode] = React.useState('light');

    const getDesignTokens = (mode) => ({
        palette: {
          mode,
          primary: {
            ...(mode === 'dark'
             ? {
                main: 'rgba(192,192,192,0.3)',
               }
             : {
                 main: 'rgba(26, 11, 91, 0.302)'
                }),
          },
          background: {
            ...(mode === 'dark'
             ? {
                default: '#000000',
                paper: '#000000',
               }
             : {
                default: '#eeeffb',
                }),
          },
          text: {
            ...(mode === 'light'
              ? {
                  primary: '#151875',
                  secondary: '#0d0e43',
                }
              : {
                  primary: '#FFFFFF',
                  secondary: '#FFFFFF',
                }),
          },
        },
    });

    const darkTheme = createTheme({
        palette: {
          primary: {
            main: blue[300]
          },
          background: {
            default: '#000000',
            paper: '#000000',
          },
          text: {
            primary: green[500],
            secondary: grey[500],
          }
        },
    });

    const lightTheme = createTheme({

    });

    const getTheme = (mode) => {
        if(mode === 'dark') {
            return darkTheme;
        }
        return lightTheme
    }
    
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
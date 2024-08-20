'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = extendTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  colorSchemes: {
    light: { // palette for light mode
        palette: {
            primary: {
              main: pink[600],
            },
          },
    },
    dark: { // palette for dark mode
        palette: {
            primary: {
              main: pink[400],
            },
          },
    }
  },
});

export default theme;

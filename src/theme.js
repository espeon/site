import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
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

export default theme;
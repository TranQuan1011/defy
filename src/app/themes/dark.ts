import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#171A23',
      paper: '#232732',
    },
    secondary: {
      main: '#DBA83D',
    },
    warning: {
      main: 'rgb(219, 168, 61)',
    },
    error: {
      main: '#ff5252',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'Arial', ' sans-serif'].join(', '),
  },
});

export default theme;

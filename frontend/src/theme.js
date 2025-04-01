import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
      light: '#4791db',
      dark: '#1565c0',
      contrastText: '#fff'
    },
    secondary: {
      main: '#7c4dff',
      light: '#9d74ff',
      dark: '#5c35d7',
      contrastText: '#fff'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd'
    }
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 16px 24px rgba(0,0,0,0.1)',
    '0px 24px 32px rgba(0,0,0,0.1)',
 
  ],
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 1
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
});

export default theme;
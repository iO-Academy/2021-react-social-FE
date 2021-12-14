import './App.css';
import LandingPage from './LandingPage/LandingPage'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    purpley: {
      main: '#7400B8',
    },
      greeny: {
        main:'#80FFDB',
      },
    lilacy: {
      main:'#5E60CE',
    }
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
  );
}

export default App;

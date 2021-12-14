import './App.css';
import LandingPage from './LandingPage/LandingPage'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    purpley: {
      main: '#7400B8',
    },
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

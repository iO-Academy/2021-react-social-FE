import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        purpley: {
            main: '#7400B8',
            contrastText: '#FFFFFF'
        },
        greeny: {
            main:'#80FFDB',
            contrastText: '#5E60CE'

        },
        lilacy: {
            main:'#5E60CE'
        },
        whitey: {
            main:'#FFFFFF'
        },
    },
});

export default theme;

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // type: 'dark',
        common: {
            black: '#282828',
            white: '#ebdbbd',
        },
        primary: {
            light: '#83a598',
            main: '#458588',
            dark: '#076678',
        },
        secondary: {
            light: '#d3869b',
            main: '#b16286',
            dark: '#8f3f71',
        },
        error: {
            light: '#fb4934',
            main: '#cc241d',
            dark: '#9d0006',
        },
        warning: {
            light: '#fe8019',
            main: '#d65d0e',
            dark: '#af3a03',
        },
        info: {
            light: '#fabd2f',
            main: '#d79921',
            dark: '#b57614',
        },
        success: {
            light: '#b8bb26',
            main: '#98971a',
            dark: '#79740e',
        },
    },
    typography: {
        fontFamily:
            "'Source Sans Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
});

export default theme;

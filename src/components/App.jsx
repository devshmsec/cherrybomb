import React, { Component } from 'react';
import { Grid, CssBaseline } from '@material-ui/core';

// Components
import SideBar from '@components/SideBar';
import SidePanel from '@components/SidePanel';
import StatusBar from '@components/StatusBar';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Grid className="window" container direction="column">
                        <Grid className="container" container direction="row">
                            <Grid
                                className="sidebar"
                                container
                                item
                                direction="column"
                            >
                                <SideBar />
                            </Grid>
                            <Grid
                                className="sidepanel"
                                container
                                item
                                direction="column"
                            >
                                <SidePanel />
                            </Grid>
                            <Grid className="editor" container item></Grid>
                        </Grid>
                        <Grid className="statusbar" item>
                            <StatusBar />
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Grid, CssBaseline, Typography } from '@material-ui/core';

// Components
import SideBar from '@components/SideBar';
import StatusBar from '@components/StatusBar';

// Styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
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
                        ></Grid>
                        <Grid className="editor" container item></Grid>
                    </Grid>
                    <Grid className="statusbar" item>
                        <StatusBar />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default App;

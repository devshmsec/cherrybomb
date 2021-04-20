import React, { Component } from 'react';
import { Grid, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleResize } from '@src/redux/resizeSlice';

// Components
import SideBar from '@components/SideBar';
import SidePanel from '@components/SidePanel';
import Editor from '@components/Editor';
import StatusBar from '@components/StatusBar';

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const resizer = document.querySelector('.resizer');
        let prev;

        const mousedown = (event) => {
            prev = event.clientX;
            window.addEventListener('mousemove', mousemove);
            window.addEventListener('mouseup', mouseup);
        };

        const mousemove = (event) => {
            let width = event.clientX - prev;
            prev = event.clientX;
            this.props.handleResize(width);
        };

        const mouseup = () => {
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mouseup', mouseup);
        };

        resizer.addEventListener('mousedown', mousedown);
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
                                direction="row"
                            >
                                <SidePanel />
                            </Grid>
                            <Grid className="editor" container item>
                                <Editor />
                            </Grid>
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

export default connect(null, { handleResize })(App);

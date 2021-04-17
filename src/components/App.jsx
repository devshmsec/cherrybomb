import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Typography variant="h1">Hello World</Typography>
            </>
        );
    }
}

export default App;

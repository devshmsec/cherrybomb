import React, { PureComponent } from 'react';
import { Typography } from '@material-ui/core';
import { EditorBlock } from 'draft-js';

export default class LineNumber extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Typography variant="h6">Line Numbers</Typography>
            </>
        );
    }
}

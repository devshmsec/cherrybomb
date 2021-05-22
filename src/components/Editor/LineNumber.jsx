import React, { useState } from 'react';
import 'babel-polyfill';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EditorBlock } from 'draft-js';
import { useSelector } from 'react-redux';

function LineNumber(props) {
    const blockMap = props.contentState.getBlockMap().toArray();
    const blockKey = props.block.key;
    const lineNumber =
        blockMap.findIndex((block) => blockKey === block.key) + 1;

    // @ts-ignore
    const { size, family } = useSelector((state) => state.font);

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            fontSize: size,
            fontFamily: family,
            // backgroundColor: '#ebdbb2',
        },
        number: {
            padding: '0ch 1ch',
            fontSize: size,
        },
        editor: {
            flex: 1,
        },
    }));
    const classes = useStyles();

    return (
        <>
            <Paper elevation={0} className={classes.root} square>
                <Typography className={classes.number} variant="caption">
                    {lineNumber}
                </Typography>
                <Paper elevation={0} className={classes.editor} square>
                    <EditorBlock {...props} />
                </Paper>
            </Paper>
        </>
    );
}

export default LineNumber;

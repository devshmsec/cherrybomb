import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles({
    container: {
        height: '1.2rem',
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        background: '#b16286',
        color: '#ebdbbd',
        position: 'fixed',
        bottom: 0,
        zIndex: 2,
    },
});

export default function StatusBar() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}></div>
        </>
    );
}

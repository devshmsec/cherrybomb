import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// views
import Explore from '@components/views/Explore';
import Search from '@components/views/Search';
import Storage from '@components/views/Storage';
import Marketplace from '@components/views/Marketplace';
import Manage from '@components/views/Manage';

// styles
import './styles.scss';

const drawerWidth = 40;
const useStyles = makeStyles((theme) => ({
    root: {
        width: theme.spacing(drawerWidth),
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
    },
}));

export default function SidePanel() {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.root} variant="outlined" square>
                <Explore />
            </Paper>
        </>
    );
}

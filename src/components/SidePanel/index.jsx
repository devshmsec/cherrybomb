import React from 'react';
import { Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

// views
import Explore from '@components/views/Explore';
import Search from '@components/views/Search';
import Storage from '@components/views/Storage';
import Matter from '@src/components/views/Matter';
import Manage from '@components/views/Manage';

// styles
import './styles.scss';

export default function SidePanel() {
    // @ts-ignore
    const selectedTab = useSelector((state) => state.sidebar.value);

    // @ts-ignore
    const drawerWidth = useSelector((state) => state.resize.value);
    const useStyles = makeStyles((theme) => ({
        root: {
            width: `${drawerWidth}px`,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
        },
    }));
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.root} variant="outlined" square>
                {selectedTab === 'Explore' && <Explore />}
                {selectedTab === 'Search' && <Search />}
                {selectedTab === 'Storage' && <Storage />}
                {selectedTab === 'Matter' && <Matter />}
                {selectedTab === 'Settings' && <Manage />}
            </Paper>
            <Divider className="resizer" orientation="vertical" flexItem />
        </>
    );
}

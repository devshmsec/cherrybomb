// importing library and components
import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';

// importing icons
import {
    FileEarmark,
    Binoculars,
    Archive,
    Basket,
    Gear,
} from 'react-bootstrap-icons';

// import styles for this file
import './styles.scss';

export default function SideBar() {
    const [value, setValue] = React.useState('Explore');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper variant="outlined" square>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    variant="standard"
                    aria-label="sidebar"
                >
                    <Tab
                        disableRipple
                        icon={<FileEarmark size={32} />}
                        value="Explore"
                    />
                    <Tab
                        disableRipple
                        icon={<Binoculars size={32} />}
                        value="Search"
                    />
                    <Tab
                        disableRipple
                        icon={<Archive size={32} />}
                        value="Storage"
                    />
                    <Tab
                        disableRipple
                        icon={<Basket size={32} />}
                        value="Marketplace"
                    />
                    <Tab
                        disableRipple
                        icon={<Gear size={32} />}
                        value="Settings"
                    />
                </Tabs>
            </Paper>
        </>
    );
}

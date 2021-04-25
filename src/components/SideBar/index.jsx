// importing library and components
import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { handleTabChange } from '@redux/sidebarSlice';

// importing icons
import {
    FileEarmark,
    FileEarmarkFill,
    Binoculars,
    BinocularsFill,
    Archive,
    ArchiveFill,
    Basket,
    BasketFill,
    Gear,
    GearFill,
} from 'react-bootstrap-icons';

// import styles for this file
import './styles.scss';

export default function SideBar() {
    // @ts-ignore
    const { value } = useSelector((state) => state.sidebar);
    const dispatch = useDispatch();

    let FileIcon =
        value === 'Explore' ? (
            <FileEarmarkFill size={32} />
        ) : (
            <FileEarmark size={32} />
        );

    let SearchIcon =
        value === 'Search' ? (
            <BinocularsFill size={32} />
        ) : (
            <Binoculars size={32} />
        );

    let StorageIcon =
        value === 'Storage' ? <ArchiveFill size={32} /> : <Archive size={32} />;

    let ShopIcon =
        value === 'Matter' ? <BasketFill size={32} /> : <Basket size={32} />;

    let GearIcon =
        value === 'Settings' ? <GearFill size={32} /> : <Gear size={32} />;

    return (
        <>
            <Paper variant="outlined" square>
                <Tabs
                    value={value}
                    onChange={(event, newValue) =>
                        dispatch(handleTabChange(newValue))
                    }
                    orientation="vertical"
                    variant="standard"
                    aria-label="sidebar"
                >
                    <Tab disableRipple icon={FileIcon} value="Explore" />
                    <Tab disableRipple icon={SearchIcon} value="Search" />
                    <Tab disableRipple icon={StorageIcon} value="Storage" />
                    <Tab disableRipple icon={ShopIcon} value="Matter" />
                    <Tab disableRipple icon={GearIcon} value="Settings" />
                </Tabs>
            </Paper>
        </>
    );
}

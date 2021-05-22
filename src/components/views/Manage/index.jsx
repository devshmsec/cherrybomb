import React, { useState } from 'react';
import 'babel-polyfill';
import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import { handleFontFamily, handleFontSize } from '@redux/fontSlice';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
    detail: {
        flexDirection: 'column',
        margin: '0px',
    },
    paper: {
        marginTop: theme.spacing(1),
        borderRadius: '0.5ch',
        border: '2px solid blueviolet',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function Manage(props) {
    const classes = useStyles();

    // @ts-ignore
    const { size, family } = useSelector((state) => state.font);
    const dispatch = useDispatch();

    const handleFontsize = (event) => {
        dispatch(handleFontSize(event.target.value));
    };

    const handleFontfamily = (event) => {
        dispatch(handleFontFamily(event.target.value));
    };

    return (
        <>
            <Accordion defaultExpanded square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="manage"
                    id="manage"
                >
                    <Typography className={classes.heading}>
                        Preference
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.detail}>
                    <FormControl
                        variant="filled"
                        className={classes.formControl}
                    >
                        <InputLabel id="font-size-label">Font Size</InputLabel>
                        <Select
                            labelId="font-size"
                            id="font-size"
                            value={size}
                            onChange={handleFontsize}
                        >
                            <MenuItem value="10px">10</MenuItem>
                            <MenuItem value="12px">12</MenuItem>
                            <MenuItem value="14px">14</MenuItem>
                            <MenuItem value="16px">16</MenuItem>
                            <MenuItem value="18px">18</MenuItem>
                            <MenuItem value="20px">20</MenuItem>
                            <MenuItem value="22px">22</MenuItem>
                            <MenuItem value="24px">24</MenuItem>
                            <MenuItem value="26px">26</MenuItem>
                            <MenuItem value="28px">28</MenuItem>
                            <MenuItem value="30px">30</MenuItem>
                            <MenuItem value="32px">32</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        variant="filled"
                        className={classes.formControl}
                    >
                        <InputLabel id="font-size-label">Font Size</InputLabel>
                        <Select
                            labelId="font-size"
                            id="font-size"
                            value={family}
                            onChange={handleFontfamily}
                        >
                            <MenuItem value="Inconsolata">Inconsolata</MenuItem>
                            <MenuItem value="Lato">Lato</MenuItem>
                            <MenuItem value="Roboto">Roboto</MenuItem>
                        </Select>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

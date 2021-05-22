import React, { useState } from 'react';
import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputBase,
    ButtonGroup,
    Button,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ClipboardCheck } from 'react-bootstrap-icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import firebase from '@utils/firebase';
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
        marginBottom: theme.spacing(3),
    },
    input: {
        margin: theme.spacing(0),
        padding: '0ch 1ch',
        flex: 1,
    },
    buttonGroup: {
        height: '4ch',
        Color: theme.palette.primary.main,
    },
}));

export default function Storage() {
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [name, setName] = useState(null);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleFile = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <>
            <Accordion defaultExpanded square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="storage"
                    id="storage"
                >
                    <Typography className={classes.heading}>Storage</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.detail}>
                    <Paper elevation={0} square className={classes.paper}>
                        <InputBase
                            className={classes.input}
                            placeholder="Filename"
                            onChange={handleName}
                        />

                        <ButtonGroup
                            className={classes.buttonGroup}
                            size="small"
                        >
                            <Button
                                disableElevation
                                color="primary"
                                variant="text"
                            >
                                <ClipboardCheck size={20} />
                            </Button>
                        </ButtonGroup>
                    </Paper>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

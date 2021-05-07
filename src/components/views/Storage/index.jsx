import React from 'react';
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

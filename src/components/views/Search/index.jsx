import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputBase,
    Typography,
    ButtonGroup,
    Button,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Asterisk, Type, Hash, Check, CheckAll } from 'react-bootstrap-icons';
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
    },
}));

export default function Manage() {
    const classes = useStyles();

    const [filters, setFilters] = React.useState(() => []);

    const handleFormat = (event, newFilters) => {
        setFilters(newFilters);
    };
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="search"
                    id="search"
                >
                    <Typography className={classes.heading}>Search</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.detail}>
                    <Paper elevation={0} square className={classes.paper}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                        />
                        <ToggleButtonGroup
                            className={classes.buttonGroup}
                            size="small"
                            value={filters}
                            onChange={handleFormat}
                            aria-label="text formatting"
                        >
                            <ToggleButton
                                disableFocusRipple
                                value="regex"
                                aria-label="Regular Expression"
                            >
                                <Asterisk size={16} />
                            </ToggleButton>
                            <ToggleButton
                                disableFocusRipple
                                value="case"
                                aria-label="Case Match"
                            >
                                <Type size={24} />
                            </ToggleButton>
                            <ToggleButton
                                disableFocusRipple
                                value="word"
                                aria-label="Whole Word"
                            >
                                <Hash size={24} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Paper>
                    <Paper elevation={0} square className={classes.paper}>
                        <InputBase
                            className={classes.input}
                            placeholder="Replace"
                        />
                        <ButtonGroup
                            className={classes.buttonGroup}
                            size="small"
                        >
                            <Button
                                size="small"
                                value="replace"
                                aria-label="Replace"
                            >
                                <Check size={24} />
                            </Button>
                            <Button
                                size="small"
                                value="replaceall"
                                aria-label="Replace All"
                            >
                                <CheckAll size={24} />
                            </Button>
                        </ButtonGroup>
                    </Paper>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

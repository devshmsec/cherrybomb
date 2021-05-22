// @ts-nocheck
import React from 'react';
import {
    Paper,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    FormControl,
    InputLabel,
    InputBase,
    ButtonGroup,
    Button,
    Chip,
    Select,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginRight: theme.spacing(1),
            width: '100%',
        },
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
        marginBottom: theme.spacing(1),
        borderRadius: '0.5ch',
        border: '2px solid blueviolet',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        overflow: 'hidden',
    },
    textField: {
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
        minWidth: 120,
        width: '100%',
    },
    chip: {
        margin: theme.spacing(0.5),
        textDecoration: 'none',
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

export default function Extras() {
    const classes = useStyles();
    const [state, setState] = React.useState('');
    const [chipData, setChipData] = React.useState([]);
    const [tagname, setTagname] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        );
    };

    const handleAdd = (chipToAdd) => () => {
        setChipData((chips) => {
            let newChip = { key: chips.length, label: chipToAdd };
            chips.push(newChip);
            document.getElementById('tagfield').value = '';
            return chips;
        });
    };

    return (
        <>
            <Accordion defaultExpanded square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="storage"
                    id="storage"
                >
                    <Typography className={classes.heading}>
                        Front Matter
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.detail}>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl
                            variant="filled"
                            className={classes.formControl}
                        >
                            <InputLabel htmlFor="filled-age-native-simple">
                                Layouts
                            </InputLabel>
                            <Select
                                native
                                value={state}
                                onChange={handleChange}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                        <TextField
                            id="title"
                            className={classes.textField}
                            label="Title"
                            multiline
                            rowsMax={4}
                            variant="filled"
                        />
                        <TextField
                            id="datetime-local"
                            label="Date"
                            type="datetime-local"
                            defaultValue="2021-04-24T10:30"
                            variant="filled"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Paper elevation={0} square className={classes.paper}>
                            <InputBase
                                className={classes.input}
                                id="tagfield"
                                placeholder="Tagname"
                                onChange={(event) =>
                                    setTagname(event.target.value)
                                }
                            />

                            <ButtonGroup
                                className={classes.buttonGroup}
                                size="small"
                            >
                                <Button
                                    disableElevation
                                    color="primary"
                                    variant="text"
                                    onClick={handleAdd(tagname)}
                                >
                                    <DoneIcon />
                                </Button>
                            </ButtonGroup>
                        </Paper>
                        <div>
                            {chipData.map((data) => {
                                return (
                                    <span key={data.key}>
                                        <Chip
                                            size="small"
                                            label={data.label}
                                            onDelete={handleDelete(data)}
                                            className={classes.chip}
                                        />
                                    </span>
                                );
                            })}
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

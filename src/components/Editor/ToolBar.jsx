import React, { useState } from 'react';
import { RichUtils } from 'draft-js';
import 'babel-polyfill';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Table, Markdown, MarkdownFill } from 'react-bootstrap-icons';
import {
    Paper,
    Divider,
    Button,
    ButtonGroup,
    MenuItem,
    FormControl,
    Select,
    InputBase,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        borderBottom: `2px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
    },
    divider: {
        margin: theme.spacing(1, 0.5),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        width: '10rem',
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        // Use the system font instead of the default Roboto font.
        fontFamily: 'Lato',
        '&:focus': {
            borderRadius: 4,
            borderColor: 'blueviolet',
        },
    },
}))(InputBase);

const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

const StyledButtonGroup = withStyles((theme) => ({
    grouped: {
        margin: theme.spacing(0),
        color: 'rgba(0, 0, 0, 0.60)',
        // border: `2px solid ${theme.palette.divider}`,
        border: 'none',
        padding: '6px 6px',
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
            borderLeft: 'none',
            marginLeft: 'none',
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
            paddingLeft: '1rem',
        },
    },
}))(ButtonGroup);

export default function ToolBar(props) {
    const [alignment, setAlignment] = useState('left');
    const [formats, setFormats] = useState(() => []);
    const [listFormat, setListFormat] = useState('');
    const [blockFormat, setBlockFormat] = useState('Normal');

    const handleBlockFormat = (event) => {
        setBlockFormat(event.target.value);
    };

    const handleListFormat = (event, newListFormat) => {
        setListFormat(newListFormat);
    };

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
        event.preventDefault();
        props.onChange(RichUtils.toggleInlineStyle(props.state, 'BOLD'));
        console.log(props.state, props.onChange);
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const classes = useStyles();

    return (
        <div>
            <Paper
                onClick={(e) => e.preventDefault()}
                elevation={0}
                className={classes.paper}
                square
            >
                <StyledToggleButtonGroup
                    size="small"
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="BOLD" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="ITALIC" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="UNDERLINE" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton
                        value="STRIKETHROUGH"
                        aria-label="strikethrough"
                    >
                        <StrikethroughSIcon />
                    </ToggleButton>
                </StyledToggleButtonGroup>

                <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </StyledToggleButtonGroup>

                <FormControl className={classes.margin}>
                    <Select
                        labelId="block-formats"
                        id="blockFormats"
                        value={blockFormat}
                        onChange={handleBlockFormat}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="Normal">Normal</MenuItem>
                        <MenuItem value="H1">Heading H1</MenuItem>
                        <MenuItem value="H2">Heading H2</MenuItem>
                        <MenuItem value="H3">Heading H3</MenuItem>
                        <MenuItem value="H4">Heading H4</MenuItem>
                        <MenuItem value="H5">Heading H5</MenuItem>
                        <MenuItem value="H6">Heading H6</MenuItem>
                        <MenuItem value="Blockquote">Blockquote</MenuItem>
                        <MenuItem value="Code">Code</MenuItem>
                    </Select>
                </FormControl>

                <StyledToggleButtonGroup
                    size="small"
                    value={listFormat}
                    exclusive
                    onChange={handleListFormat}
                    aria-label="list format"
                >
                    <ToggleButton value="ordered" aria-label="ordered">
                        <FormatListNumberedIcon />
                    </ToggleButton>
                    <ToggleButton value="unordered" aria-label="unordered">
                        <FormatListBulletedIcon />
                    </ToggleButton>
                </StyledToggleButtonGroup>

                <StyledButtonGroup size="medium" aria-label="insert items">
                    <Button value="table" aria-label="table">
                        <Table size={20} />
                        <ArrowDropDownIcon />
                    </Button>
                    <Button value="link" aria-label="link">
                        <AttachFileIcon />
                        <ArrowDropDownIcon />
                    </Button>
                    <Button value="emoji" aria-label="emoji">
                        <InsertEmoticonIcon />
                        <ArrowDropDownIcon />
                    </Button>
                    <Button value="image" aria-label="image">
                        <InsertPhotoIcon />
                        <ArrowDropDownIcon />
                    </Button>
                </StyledButtonGroup>
            </Paper>
        </div>
    );
}

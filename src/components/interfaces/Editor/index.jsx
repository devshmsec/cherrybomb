import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Divider, Button, ButtonGroup } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";

import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatIndentIncreaseIcon from "@material-ui/icons/FormatIndentIncrease";
import FormatIndentDecreaseIcon from "@material-ui/icons/FormatIndentDecrease";
import CodeIcon from "@material-ui/icons/Code";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ImageIcon from "@material-ui/icons/Image";
import LaunchIcon from "@material-ui/icons/Launch";
import RedoIcon from "@material-ui/icons/Redo";
import UndoIcon from "@material-ui/icons/Undo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		border: `1px solid ${theme.palette.divider}`,
		flexWrap: "wrap",
	},
	toolbar: {
		display: "flex",
		width: "100%",
		border: `1px solid ${theme.palette.divider}`,
		flexWrap: "wrap",
		justifyContent: "center",
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "10ch",
		},
	},
	divider: {
		margin: theme.spacing(1, 0.5),
	},
	editor: {
		display: "flex",
		border: `1px solid ${theme.palette.divider}`,
		flexWrap: "wrap",
		padding: "1rem",
		width: "100%",
		minHeight: "80%",
	},
	margin: {
		margin: theme.spacing(1),
	},
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
	grouped: {
		margin: theme.spacing(0.5),
		border: "none",
		color: "rgba(0, 0, 0, 0.7)",
		"&:not(:first-child)": {
			borderRadius: theme.shape.borderRadius,
		},
		"&:first-child": {
			borderRadius: theme.shape.borderRadius,
		},
	},
}))(ToggleButtonGroup);

const StyledButtonGroup = withStyles((theme) => ({
	grouped: {
		margin: theme.spacing(0.5),
		border: "none",
		color: "rgba(0, 0, 0, 0.7)",
		"&:not(:first-child)": {
			borderRadius: theme.shape.borderRadius,
		},
		"&:first-child": {
			borderRadius: theme.shape.borderRadius,
		},
	},
}))(ButtonGroup);

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		width: "6rem",
		padding: "6px 32px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}))(InputBase);

export default function Editor() {
	const currencies = [
		{
			value: "8",
			label: "8",
		},
		{
			value: "9",
			label: "9",
		},
		{
			value: "10",
			label: "10",
		},
		{
			value: "12",
			label: "12",
		},
		{
			value: "14",
			label: "14",
		},
		{
			value: "16",
			label: "16",
		},
		{
			value: "18",
			label: "18",
		},
		{
			value: "22",
			label: "22",
		},
		{
			value: "28",
			label: "28",
		},
		{
			value: "36",
			label: "36",
		},
		{
			value: "48",
			label: "48",
		},
	];

	const classes = useStyles();

	const [alignment, setAlignment] = React.useState("left");
	const [formats, setFormats] = React.useState(() => ["italic"]);
	const [listFormat, setListFormat] = React.useState("");

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	const handleListFormat = (event, newListFormat) => {
		setListFormat(newListFormat);
	};

	const [heading, setHeading] = React.useState("Normal");
	const handleHeadingChange = (event) => {
		setHeading(event.target.value);
	};

	const [fontSize, setFontSize] = React.useState("12");

	const handleFontSize = (event) => {
		setFontSize(event.target.value);
	};

	return (
		<div className={classes.root}>
			<Paper elevation={0} className={classes.toolbar}>
				<FormControl className={classes.margin}>
					<Select
						labelId="demo-customized-select-label"
						id="demo-customized-select"
						value={heading}
						onChange={handleHeadingChange}
						input={<BootstrapInput />}
					>
						<MenuItem value="Normal">Normal</MenuItem>
						<MenuItem value="Heading1">Heading1</MenuItem>
						<MenuItem value="Heading2">Heading2</MenuItem>
						<MenuItem value="Heading3">Heading3</MenuItem>
						<MenuItem value="Heading4">Heading4</MenuItem>
						<MenuItem value="Heading5">Heading5</MenuItem>
						<MenuItem value="Heading6">Heading6</MenuItem>
					</Select>
				</FormControl>

				<TextField
					id="standard-select-fontSize"
					select
					value={fontSize}
					onChange={handleFontSize}
				>
					{currencies.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>

				{/* Font Styling Options for text block */}
				<StyledToggleButtonGroup
					size="small"
					value={formats}
					onChange={handleFormat}
					aria-label="Text formatting"
				>
					<ToggleButton value="bold" aria-label="bold">
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton value="italic" aria-label="italic">
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value="underlined" aria-label="underlined">
						<FormatUnderlinedIcon />
					</ToggleButton>
					<ToggleButton
						value="strikethrough"
						aria-label="strikethrough"
					>
						<StrikethroughSIcon />
					</ToggleButton>
				</StyledToggleButtonGroup>
				<Divider
					flexItem
					orientation="vertical"
					className={classes.divider}
				/>

				<StyledButtonGroup>
					<Button value="color" aria-label="color">
						<FormatColorFillIcon />
						<ArrowDropDownIcon />
					</Button>
				</StyledButtonGroup>

				{/* Indentation options for text block */}
				<StyledButtonGroup size="small" aria-label="indentation">
					<Button value="indent" aria-label="indent" disabled>
						<FormatIndentIncreaseIcon />
					</Button>
					<Button value="outdent" aria-label="outdent" disabled>
						<FormatIndentDecreaseIcon />
					</Button>
				</StyledButtonGroup>
				<Divider
					flexItem
					orientation="vertical"
					className={classes.divider}
				/>

				{/* Text Alignment Options for text block */}
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
					<ToggleButton
						value="justify"
						aria-label="justified"
						disabled
					>
						<FormatAlignJustifyIcon />
					</ToggleButton>
				</StyledToggleButtonGroup>
				<Divider
					flexItem
					orientation="vertical"
					className={classes.divider}
				/>

				{/* Ordered and Unordered List Formating */}
				<StyledToggleButtonGroup
					size="small"
					exclusive
					value={listFormat}
					onChange={handleListFormat}
					aria-label="List formatting"
				>
					<ToggleButton value="ordered" aria-label="Ordered List">
						<FormatListNumberedIcon />
					</ToggleButton>
					<ToggleButton value="unordered" aria-label="Unordered List">
						<FormatListBulletedIcon />
					</ToggleButton>
				</StyledToggleButtonGroup>
				<Divider
					flexItem
					orientation="vertical"
					className={classes.divider}
				/>

				<StyledButtonGroup
					variant="outlined"
					size="small"
					aria-label="Extras"
				>
					{/* Options for text block decorations */}
					<Button value="code" aria-label="code">
						<CodeIcon />
					</Button>
					<Button value="quote" aria-label="blockquote">
						<FormatQuoteIcon />
					</Button>
					<Button value="emoji" aria-label="emoji">
						<EmojiEmotionsIcon />
					</Button>

					{/* Options to embed links and images into docs */}

					<Button value="link" aria-label="launch">
						<LaunchIcon />
					</Button>
					<Button value="image" aria-label="image">
						<ImageIcon />
					</Button>
				</StyledButtonGroup>

				{/* History feature to undo and redo */}
				<StyledButtonGroup
					variant="outlined"
					size="small"
					aria-label="History"
				>
					<Button value="undo" aria-label="undo" disabled>
						<UndoIcon />
					</Button>
					<Button value="redo" aria-label="redo" disabled>
						<RedoIcon />
					</Button>
				</StyledButtonGroup>
			</Paper>
			<Paper elevation={0} className={classes.editor}>
				<h1>Hello World</h1>
			</Paper>
		</div>
	);
}

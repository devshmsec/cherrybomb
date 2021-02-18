import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import SvgIcon from "@material-ui/core/SvgIcon";
import DialogTitle from "@material-ui/core/DialogTitle";

// Icons
import AddBoxIcon from "@material-ui/icons/AddBox";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import SaveIcon from "@material-ui/icons/Save";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import PhotoSizeSelectLargeIcon from "@material-ui/icons/PhotoSizeSelectLarge";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

function MarkdownIcon(props) {
	return (
		<SvgIcon
			fontSize="inherit"
			style={{ width: 30, height: 30, marginTop: 8, marginLeft: 8 }}
			{...props}
		>
			<path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
			<path
				fillRule="evenodd"
				d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708z"
			/>
			<path
				fillRule="evenodd"
				d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5z"
			/>
			<path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z" />
		</SvgIcon>
	);
}

// Components

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export default function ToolBarView() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					New Parent Node
				</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Create
					</Button>
				</DialogActions>
			</Dialog>

			<Toolbar>
				<Tooltip title="Add Parent Node">
					<IconButton
						className={classes.button}
						aria-label="add parent node"
						onClick={handleClickOpen}
					>
						<AddBoxIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Add Child Node">
					<IconButton aria-label="add child node">
						<NoteAddIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Delete">
					<IconButton aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Previous Node">
					<IconButton aria-label="previous node">
						<ArrowBackIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Next Node">
					<IconButton aria-label="next node">
						<ArrowForwardIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Open">
					<IconButton aria-label="open project">
						<FolderOpenIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Save">
					<IconButton aria-label="save the project">
						<SaveIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Export to PDF">
					<IconButton aria-label="export to pdf">
						<PictureAsPdfIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Export to Markdown">
					<IconButton aria-label="export to markdown">
						<MarkdownIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Picture Selection">
					<IconButton aria-label="select/crop picture">
						<PhotoSizeSelectLargeIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="GIF Maker">
					<IconButton aria-label="convert video to gif">
						<MovieFilterIcon />
					</IconButton>
				</Tooltip>
			</Toolbar>
		</>
	);
}

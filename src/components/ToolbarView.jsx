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
import DialogContentText from "@material-ui/core/DialogContentText";
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
import CodeIcon from "@material-ui/icons/Code";
import FindInPageIcon from "@material-ui/icons/FindInPage";

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
						<CodeIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Find in Page">
					<IconButton aria-label="find in page">
						<FindInPageIcon />
					</IconButton>
				</Tooltip>
			</Toolbar>
		</>
	);
}

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
import PhotoSizeSelectLargeIcon from "@material-ui/icons/PhotoSizeSelectLarge";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

// Components
import Converter from "./Convert";
import PicCropper from "./Cropper";
import {
	CreateParentNode,
	CreateChildNode,
	DeleteNode,
	NewProject,
} from "./Popovers";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export default function ToolBarView() {
	const classes = useStyles();

	// Parent Node
	const [openParentNode, setOpenParentNode] = React.useState(false);
	const handleParentOpen = () => {
		setOpenParentNode(true);
	};
	const handleParentClose = () => {
		setOpenParentNode(false);
	};

	// Child Node
	const [openChildNode, setOpenChildNode] = React.useState(false);
	const handleChildOpen = () => {
		setOpenChildNode(true);
	};
	const handleChildClose = () => {
		setOpenChildNode(false);
	};

	// Delete Node
	const [openDelete, setOpenDelete] = React.useState(false);
	const handleDeleteOpen = () => {
		setOpenDelete(true);
	};
	const handleDeleteClose = () => {
		setOpenDelete(false);
	};

	// New Project
	const [openNewProject, setOpenNewProject] = React.useState(false);
	const handleNewProjectOpen = () => {
		setOpenNewProject(true);
	};
	const handleNewProjectClose = () => {
		setOpenNewProject(false);
	};

	// Gif Maker
	const [openGifMaker, setOpenGifMaker] = React.useState(false);
	const handleGifMakerOpen = () => {
		setOpenGifMaker(true);
	};
	const handleGifMakerClose = () => {
		setOpenGifMaker(false);
	};

	// Picture Selector
	const [openPicSel, setOpenPicSel] = React.useState(false);
	const handlePicSelOpen = () => {
		setOpenPicSel(true);
	};
	const handlePicSelClose = () => {
		setOpenPicSel(false);
	};

	return (
		<>
			<CreateParentNode
				openParentNode={openParentNode}
				handleParentClose={handleParentClose}
			/>

			<CreateChildNode
				openChildNode={openChildNode}
				handleChildClose={handleChildClose}
			/>

			<DeleteNode
				openDelete={openDelete}
				handleDeleteClose={handleDeleteClose}
			/>

			<NewProject
				openNewProject={openNewProject}
				handleNewProjectClose={handleNewProjectClose}
			/>

			<Dialog
				fullWidth
				maxWidth="sm"
				open={openGifMaker}
				onClose={handleGifMakerClose}
				aria-labelledby="form-dialog-title"
			>
				<Converter />
			</Dialog>

			<Dialog
				fullWidth
				maxWidth="sm"
				open={openPicSel}
				onClose={handlePicSelClose}
				aria-labelledby="form-dialog-title"
			>
				<PicCropper />
			</Dialog>

			<Toolbar>
				<Tooltip title="Add Parent Node">
					<IconButton
						className={classes.button}
						aria-label="add parent node"
						onClick={handleParentOpen}
					>
						<AddBoxIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Add Child Node">
					<IconButton
						className={classes.button}
						aria-label="add child node"
						onClick={handleChildOpen}
					>
						<NoteAddIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="Delete">
					<IconButton
						className={classes.button}
						aria-label="delete"
						onClick={handleDeleteOpen}
					>
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
					<IconButton
						className={classes.button}
						aria-label="open project"
						onClick={handleNewProjectOpen}
					>
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

				<Tooltip title="Picture Selection">
					<IconButton
						className={classes.button}
						aria-label="select/crop picture"
						onClick={handlePicSelOpen}
					>
						<PhotoSizeSelectLargeIcon />
					</IconButton>
				</Tooltip>

				<Tooltip title="GIF Maker">
					<IconButton
						className={classes.button}
						aria-label="convert video to gif"
						onClick={handleGifMakerOpen}
					>
						<MovieFilterIcon />
					</IconButton>
				</Tooltip>
			</Toolbar>
		</>
	);
}

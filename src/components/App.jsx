import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadAdapter from "../uploadadabter";

// Colors
import Green from "@material-ui/core/colors/green";

// Custom Components
import ToolBarView from "./ToolbarView";
import SideBarView from "./SidebarView";
import Breadcrumb from "./Breadcrumb";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		color: theme.palette.text.secondary,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
		marginTop: 65,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	Breadcrumb: {
		marginTop: 65,
		marginBottom: 10,
	},
}));

export default function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<ToolBarView />
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerContainer}>
					<SideBarView />
				</div>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.Breadcrumb}>
					<Breadcrumb />
				</div>

				<CKEditor
					editor={ClassicEditor}
					data="<p>Hello from CKEditor 5!</p>"
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						editor.plugins.get(
							"FileRepository"
						).createUploadAdapter = (loader) => {
							return new UploadAdapter(loader);
						};
						console.log("Editor is ready to use!", editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log("Blur.", editor);
					}}
					onFocus={(event, editor) => {
						console.log("Focus.", editor);
					}}
				/>
			</main>
		</div>
	);
}

import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		flexGrow: "1",
		height: "auto",
	},
}));

export default () => {
	const classes = useStyles();
	const [editorState, setEditorState] = React.useState(() =>
		EditorState.createEmpty()
	);

	const handleChange = (value) => {
		setEditorState(value);
	};

	return (
		<>
			<Paper className={classes.root} variant="outlined">
				<Editor
					placeholder="Write Something"
					editorState={editorState}
					onChange={handleChange}
				/>
			</Paper>
		</>
	);
};

import React from "react";
import { Paper } from "@material-ui/core";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "draft-js/dist/Draft.css";
import "@node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class ControlledEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		};
	}

	onEditorStateChange = (editorState) => {
		this.setState({
			editorState,
		});
	};

	render() {
		const { editorState } = this.state;
		return (
			<>
				<Paper variant="outlined">
					<Editor
						editorState={editorState}
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
						onEditorStateChange={this.onEditorStateChange}
					/>
				</Paper>
			</>
		);
	}
}

export default ControlledEditor;

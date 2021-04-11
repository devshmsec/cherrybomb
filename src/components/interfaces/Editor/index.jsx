import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToMarkdown from "draftjs-to-markdown";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Bootstrap svg icons
import bold from "@assets/icons/tools/type-bold.svg";
import italic from "@assets/icons/tools/type-italic.svg";
import strikethrough from "@assets/icons/tools/type-strikethrough.svg";
import underline from "@assets/icons/tools/type-underline.svg";
import fontSize from "@assets/icons/tools/fonts.svg";
import left from "@assets/icons/tools/text-left.svg";
import center from "@assets/icons/tools/text-center.svg";
import right from "@assets/icons/tools/text-right.svg";
import justify from "@assets/icons/tools/justify.svg";
import outdent from "@assets/icons/tools/text-indent-left.svg";
import indent from "@assets/icons/tools/text-indent-right.svg";
import ordered from "@assets/icons/tools/list-ol.svg";
import unordered from "@assets/icons/tools/list-ul.svg";
import color from "@assets/icons/tools/palette2.svg";
import image from "@assets/icons/tools/image.svg";
import emoji from "@assets/icons/tools/emoji-smile.svg";
import link from "@assets/icons/tools/link.svg";
import redo from "@assets/icons/tools/arrow-clockwise.svg";
import undo from "@assets/icons/tools/arrow-counterclockwise.svg";

// Custom Css
import "./styles.css";

class EditorConvertToMarkdown extends Component {
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
						toolbar={{
							options: [
								"inline",
								"blockType",
								"fontSize",
								"fontFamily",
								"list",
								"textAlign",
								"colorPicker",
								"emoji",
								"link",
								"image",
								"history",
							],
							inline: {
								options: [
									"bold",
									"italic",
									"underline",
									"strikethrough",
								],
								bold: { icon: bold },
								italic: { icon: italic },
								underline: { icon: underline },
								strikethrough: { icon: strikethrough },
							},
							list: {
								inDropdown: false,
								options: [
									"unordered",
									"ordered",
									"indent",
									"outdent",
								],
								unordered: { icon: unordered },
								ordered: { icon: ordered },
								indent: { icon: indent },
								outdent: { icon: outdent },
							},
							textAlign: {
								inDropdown: false,
								options: ["left", "center", "right", "justify"],
								left: { icon: left },
								center: { icon: center },
								right: { icon: right },
								justify: { icon: justify },
							},
							colorPicker: { icon: color },
							emoji: { icon: emoji },
							link: {
								inDropdown: false,
								showOpenOptionOnHover: true,
								defaultTargetOption: "_self",
								options: ["link"],
								link: { icon: link },
							},
							image: { icon: image },
							history: {
								inDropdown: false,
								options: ["undo", "redo"],
								undo: { icon: undo },
								redo: { icon: redo },
							},
						}}
						editorState={editorState}
						placeholder="Write something awesome!"
						wrapperClassName="wrapper"
						editorClassName="writer"
						onEditorStateChange={this.onEditorStateChange}
					/>
					<textarea
						disabled
						value={
							editorState &&
							draftToMarkdown(
								convertToRaw(editorState.getCurrentContent())
							)
						}
					/>
				</Paper>
			</>
		);
	}
}

export default EditorConvertToMarkdown;

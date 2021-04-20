import React from 'react';
import 'babel-polyfill';
import { Paper } from '@material-ui/core';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './styles.scss';

export default function WysiwygEditor() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    return (
        <>
            <Paper variant="outlined" square>
                <Editor editorState={editorState} onChange={setEditorState} />
            </Paper>
        </>
    );
}

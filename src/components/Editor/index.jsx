import React, { Component } from 'react';
import 'babel-polyfill';
import { Paper } from '@material-ui/core';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import ToolBar from './ToolBar';
import LineNumber from './LineNumber';

// styles
import 'draft-js/dist/Draft.css';
import './styles.scss';

export default class WysiwygEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.editorRef = React.createRef();
        this.handleKeyCommand = this._handleKeyCommand.bind(this);
        this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
        this.toggleBlockType = this._toggleBlockType.bind(this);
        this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
        this.blockRendererFn = this._blockRendererFn.bind(this);
        this.blockStyleFn = this._blockStyleFn.bind(this);
    }

    _handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _mapKeyToEditorCommand(e) {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
                e,
                this.state.editorState,
                4 /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
                this.onChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(this.state.editorState, blockType)
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
        );
    }

    _blockRendererFn(contentBlock) {
        const type = contentBlock.getType();
        switch (type) {
            default:
                return {
                    component: LineNumber,
                    editable: true,
                };
        }
    }

    _blockStyleFn(contentBlock) {
        const type = contentBlock.getType();
        if (type === '') {
            return 'normal';
        }
    }

    render() {
        const { editorState } = this.state;

        return (
            <>
                <Paper variant="outlined" square>
                    <ToolBar state={editorState} onChange={this.onChange} />
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        keyBindingFn={this.mapKeyToEditorCommand}
                        blockStyleFn={this.blockStyleFn}
                        onChange={this.onChange}
                        placeholder="Take a note..."
                        ref={this.editorRef}
                        spellCheck={true}
                        blockRendererFn={this.blockRendererFn}
                    />
                </Paper>
            </>
        );
    }
}

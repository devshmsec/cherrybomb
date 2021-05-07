import React, { PureComponent } from 'react';
import { EditorBlock } from 'draft-js';

export default class LineNumber extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const blockMap = this.props.contentState.getBlockMap().toArray();
        const blockKey = this.props.block.key;
        const lineNumber =
            blockMap.findIndex((block) => blockKey === block.key) + 1;

        return (
            <>
                <div style={{ display: 'flex' }}>
                    <span style={{ marginRight: '5px' }}>{lineNumber}</span>
                    <div style={{ flex: '1' }}>
                        <EditorBlock {...this.props} />
                    </div>
                </div>
            </>
        );
    }
}

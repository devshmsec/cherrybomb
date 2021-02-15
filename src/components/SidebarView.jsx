import React from "react";
import PropTypes from "prop-types";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support

// icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import CancelIcon from "@material-ui/icons/Cancel";

function TransitionComponent(props) {
	const style = useSpring({
		from: { opacity: 0, transform: "translate3d(20px,0,0)" },
		to: {
			opacity: props.in ? 1 : 0,
			transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
		},
	});

	return (
		<animated.div style={style}>
			<Collapse {...props} />
		</animated.div>
	);
}

TransitionComponent.propTypes = {
	/**
	 * Show the component; triggers the enter or exit states
	 */
	in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
	iconContainer: {
		"& .close": {
			opacity: 0.4,
		},
	},
	group: {
		marginLeft: 10,
		paddingLeft: 20,
	},
}))((props) => (
	<TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
	root: {
		height: 364,
		flexGrow: 1,
		maxWidth: 400,
		margin: 4,
		padding: 4,
		paddingTop: 20,
	},
});

let treeNodes = {
	id: "root",
	name: "Parent",
	children: [
		{
			id: "1",
			name: "Child - 1",
		},
		{
			id: "3",
			name: "Child - 3",
			children: [
				{
					id: "4",
					name: "Child - 4",
				},
			],
		},
	],
};

const renderTree = (nodes) => (
	<StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
		{Array.isArray(nodes.children)
			? nodes.children.map((node) => renderTree(node))
			: null}
	</StyledTreeItem>
);

export default function CustomizedTreeView() {
	const classes = useStyles();

	return (
		<TreeView
			className={classes.root}
			defaultExpanded={["2"]}
			defaultCollapseIcon={<ExpandLessIcon />}
			defaultExpandIcon={<ExpandMoreIcon />}
			defaultEndIcon={<CancelIcon />}
		>
			{renderTree(treeNodes)}
		</TreeView>
	);
}

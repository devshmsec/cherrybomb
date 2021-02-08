import React, { Component } from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import FilterTiltShiftOutlinedIcon from "@material-ui/icons/FilterTiltShiftOutlined";

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
			opacity: 0.3,
		},
	},
	group: {
		marginLeft: 7,
		paddingLeft: 18,
		// borderLeft: `1px solid ${fade(theme.palette.text.primary, 0.4)}`,
	},
}))((props) => (
	<TreeItem {...props} TransitionComponent={TransitionComponent} />
));

const useStyles = makeStyles({
	root: {
		height: 264,
		flexGrow: 1,
		maxWidth: 400,
		margin: 10,
	},
});

function CustomizedTreeView() {
	const classes = useStyles();

	return (
		<TreeView
			className={classes.root}
			defaultExpanded={["1"]}
			defaultCollapseIcon={<ArrowDownwardOutlinedIcon />}
			defaultExpandIcon={<ArrowForwardOutlinedIcon />}
			defaultEndIcon={<FilterTiltShiftOutlinedIcon />}
		>
			<StyledTreeItem nodeId="1" label="Main">
				<StyledTreeItem nodeId="2" label="Hello" />
				<StyledTreeItem nodeId="3" label="Subtree with children">
					<StyledTreeItem nodeId="6" label="Hello" />
					<StyledTreeItem
						nodeId="7"
						label="Sub-subtree with children"
					>
						<StyledTreeItem nodeId="9" label="Child 1" />
						<StyledTreeItem nodeId="10" label="Child 2" />
						<StyledTreeItem nodeId="11" label="Child 3" />
					</StyledTreeItem>
					<StyledTreeItem nodeId="8" label="Hello" />
				</StyledTreeItem>
				<StyledTreeItem nodeId="4" label="World" />
				<StyledTreeItem nodeId="5" label="Something something" />
			</StyledTreeItem>
		</TreeView>
	);
}

class Sidebar extends Component {
	render() {
		return <CustomizedTreeView />;
	}
}

export default Sidebar;

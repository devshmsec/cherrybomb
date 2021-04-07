import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const StyledTabs = withStyles((theme) => ({
	flexContainer: {
		backgroundColor: "#83a598",
		color: "#282828",
	},
	fixed: {
		backgroundColor: "#458588",
	},
}))(Tabs);

const StyledTab = withStyles((theme) => ({
	root: {
		textTransform: "inherit",
		backgroundColor: "#458588",
		color: "#1d2021",
	},
}))(Tab);

export default function OpenedTabs() {
	const [value, setValue] = React.useState(2);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper square>
			<StyledTabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				aria-label="disabled tabs example"
			></StyledTabs>
		</Paper>
	);
}

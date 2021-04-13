import React, { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { TabContext } from "@components/App";
import * as Icons from "react-bootstrap-icons";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexGrow: 1,
		height: "100vh",
		width: "4.5rem",
	},
}));

const StyledTab = withStyles((theme) => ({
	root: {
		overflow: "hidden",
	},
	wrapper: {
		padding: "0.5rem",
		display: "inline-flex",
		alignItems: "flex-start",
	},
}))(Tab);

export default function TabBar() {
	const classes = useStyles();
	const tabContext = useContext(TabContext);

	return (
		<>
			<Paper className={classes.root} variant="outlined">
				<Tabs
					value={tabContext.tabSelected}
					onChange={tabContext.handleSideTabs}
					orientation="vertical"
					variant="standard"
					aria-label="SideBarTabs"
				>
					<StyledTab
						disableRipple
						icon={<Icons.FileEarmark size={32} />}
						value="Explorer"
					/>
					<StyledTab
						disableRipple
						icon={<Icons.AppIndicator size={32} />}
						value="Templates"
					/>
					<StyledTab
						disableRipple
						icon={<Icons.Collection size={32} />}
						value="Collections"
					/>
					<StyledTab
						disableRipple
						icon={<Icons.Archive size={32} />}
						value="Converter"
					/>
					<StyledTab
						disableRipple
						icon={<Icons.Gear size={32} />}
						value="Settings"
					/>
				</Tabs>
			</Paper>
		</>
	);
}

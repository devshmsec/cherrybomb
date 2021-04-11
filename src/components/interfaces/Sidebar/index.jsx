import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { TabList, TabPanel, TabContext } from "@material-ui/lab";
import * as Icons from "react-bootstrap-icons";

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
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Paper className={classes.root} variant="outlined">
				<Tabs
					value={value}
					onChange={handleChange}
					orientation="vertical"
					variant="standard"
					aria-label="Tabs"
				>
					<StyledTab
						disableRipple
						id="Explorer"
						icon={<Icons.FileEarmark size={32} />}
						aria-label="Explorer"
					/>
					<StyledTab
						disableRipple
						id="Templates"
						icon={<Icons.AppIndicator size={32} />}
						aria-label="Templates"
					/>
					<StyledTab
						disableRipple
						id="Media"
						icon={<Icons.Collection size={32} />}
						aria-label="Media"
					/>
					<StyledTab
						disableRipple
						id="Export"
						icon={<Icons.Archive size={32} />}
						aria-label="Export"
					/>
					<StyledTab
						disableRipple
						id="Settings"
						icon={<Icons.Gear size={32} />}
						aria-label="Settings"
					/>
				</Tabs>
			</Paper>
		</>
	);
}

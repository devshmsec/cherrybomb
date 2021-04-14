import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Explorer from "@views/Explorer";
import Templates from "@views/Templates";
import Collections from "@views/Collections";
import Converter from "@views/Converter";
import Settings from "@views/Settings";

import { TabContext } from "@components/App";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "20rem",
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#282828",
		height: "100vh",
		overflow: "hidden",
	},
}));

export default function Panel() {
	const classes = useStyles();
	const tabContext = useContext(TabContext);

	return (
		<>
			<Paper className={classes.root} variant="outlined" square>
				{tabContext.tabSelected === "Explorer" && <Explorer />}
				{tabContext.tabSelected === "Templates" && <Templates />}
				{tabContext.tabSelected === "Collections" && <Collections />}
				{tabContext.tabSelected === "Converter" && <Converter />}
				{tabContext.tabSelected === "Settings" && <Settings />}
			</Paper>
		</>
	);
}

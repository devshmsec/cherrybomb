import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	container: {
		height: "18px",
		diplay: "flex",
		flexGrow: "1",
		backgroundColor: "#b16286",
		color: "white",
		position: "absolute",
		width: "100%",
		bottom: "0%",
		zIndex: "2",
	},
});

export const StatusBar = () => {
	const classes = useStyles();
	return <div className={classes.container}></div>;
};

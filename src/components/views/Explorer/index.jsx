import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@material-ui/core";
import FileSystemNav from "@components/views/Explorer/FileSystemNav";
import Outline from "@components/views/Explorer/Outline";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		color: "#ebdbbd",
		background: "#282828",
	},
	heading: {
		fontSize: theme.typography.pxToRem(14),
		fontWeight: theme.typography.fontWeightBold,
	},
}));

export default function Explorer() {
	const classes = useStyles();

	return (
		<>
			<div>
				<Accordion defaultExpanded square className={classes.root}>
					<AccordionSummary aria-controls="Files" id="Files">
						<Typography className={classes.heading}>
							Files
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<FileSystemNav />
					</AccordionDetails>
				</Accordion>
				<Accordion square className={classes.root}>
					<AccordionSummary aria-controls="Outline" id="Outline">
						<Typography className={classes.heading}>
							Outline
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Outline />
					</AccordionDetails>
				</Accordion>
			</div>
		</>
	);
}

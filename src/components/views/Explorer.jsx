import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "20rem",
	},
	heading: {
		fontSize: theme.typography.pxToRem(12),
		textTransform: "uppercase",
		fontWeight: theme.typography.fontWeightBold,
	},
}));

const Summary = withStyles((theme) => ({
	root: {
		minHeight: "20px",
		height: "30px",
		borderRadius: "0px",
	},
}))(AccordionSummary);

const StyledAccordion = withStyles((theme) => ({
	root: {
		borderRadius: "0px",
		backgroundColor: "#1d2021",
		color: "#ebdbb2",
	},
}))(Accordion);

const Details = withStyles((theme) => ({
	root: {
		backgroundColor: "#282828",
	},
}))(AccordionDetails);

export default function SimpleAccordion() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<StyledAccordion defaultExpanded>
				<Summary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>
						Explorer
					</Typography>
				</Summary>
				<Details>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</Typography>
				</Details>
			</StyledAccordion>
			<StyledAccordion>
				<Summary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>Outline</Typography>
				</Summary>
				<Details>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Suspendisse malesuada lacus ex, sit amet blandit leo
						lobortis eget.
					</Typography>
				</Details>
			</StyledAccordion>
		</div>
	);
}

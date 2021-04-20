import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileExplore from './FileExplore';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export default function Explore() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion defaultExpanded square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="filesystem-navigation"
                    id="filesystem-navigation"
                >
                    <Typography className={classes.heading}>
                        File Explore
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FileExplore />
                </AccordionDetails>
            </Accordion>
            <Accordion square>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="outline-map"
                    id="outline-map"
                >
                    <Typography className={classes.heading}>Outline</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

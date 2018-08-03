import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const WorkExperience = ({classes}) => {
    return(
        <Paper className={classes.contentPaper}>
            <text> asdasdadsa d</text>
        </Paper>
    );
}

const styles = theme => ({
    contentPaper: {
        width: '100%',
        height: 100,
        padding: 10,
        margin: 10
    },
})

export default withStyles(styles)(WorkExperience);
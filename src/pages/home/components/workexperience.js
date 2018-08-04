import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const displayExperiences = (classes, experience) =>{
    const objs = [];
    experience.forEach(exp => {
        objs.push(
            <div>
                <Typography color="textSecondary" variant="display1" className={classes.title} component="h3">{exp.title}</Typography>
            </div>
        )
    });
}

const WorkExperience = ({classes, experience}) => {
    return(
        <Paper className={classes.contentPaper}>
            <div className={classes.grouping}>
                <FontAwesomeIcon icon="briefcase" size="2x"/>
                <Typography color="textSecondary" variant="display1" className={classes.title} component="h2">Work Experience</Typography>
            </div>
        </Paper>
    );
}

const styles = theme => ({
    contentPaper: {
        padding: 20,
        margin: 10,
        flex: 1
    },
    title: {
        fontSize: 28,
        marginLeft: 20,
    },
    grouping: {
        display: 'inline-flex',
        alignItems: 'center',
        marginBottom: 30
    }
})

export default withStyles(styles)(WorkExperience);
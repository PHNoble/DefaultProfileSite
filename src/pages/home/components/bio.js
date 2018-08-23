import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'

import {palette} from '../../../assets/theme.json';

const Bio = ({classes, bio}) => {
    return(
        <Paper className={classes.contentPaper}>
            <div className={classes.grouping}>
                <FontAwesomeIcon color={palette.primary.main} icon="book" size="2x"/>
                <Typography color="textSecondary" variant="display1" className={classes.heading} component="h2">Bio</Typography>
            </div>
            <p className={classes.bio}>{bio}</p>
        </Paper>
    );
}

const styles = theme => ({
    contentPaper: {
        padding: 20,
        margin: 10,
        backgroundColor: "#EDEDED"
    },
    grouping: {
        display: 'inline-flex',
        alignItems: 'center',
        flex: 1,
        marginBottom: 10
    },
    heading: {
        fontSize: 28,
        marginLeft: 20,
    },
    bio: {
        fontSize: 14
    }
})

export default withStyles(styles)(Bio);
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'

import {palette} from '../../../assets/theme.json';

const Education = ({classes, education}) => {
    return(
        <Paper className={classes.contentPaper}>
            <div className={classes.grouping}>
                <FontAwesomeIcon color={palette.primary.main} icon="graduation-cap" size="2x"/>
                <Typography color="textSecondary" variant="display1" className={classes.heading} component="h2">Education</Typography>
            </div>
            {
                education.map(edu => {
                    return (
                        <div className={classes.col}>
                            <div className={classes.minorGrouping}>
                                <Typography color="textPrimary" variant="display1" className={classes.title} component="h3">{edu.award}</Typography>
                                <Typography color="textSecondary" variant="display1" className={classes.org} component="h3">at {edu.organization}</Typography>
                            </div>
                            <div className={classes.minorGrouping}>
                                <FontAwesomeIcon color={palette.primary.main} icon="calendar-alt" className={classes.icon}/>
                                <Typography color="textPrimary" variant="display1" className={classes.date} component="h3">{edu.dates.start} - </Typography>
                                {edu.dates.end && 
                                    <Typography color="textPrimary" variant="display1" className={classes.date} component="h3">{edu.dates.end}</Typography>
                                }
                                {!edu.dates.end && 
                                    <div className={classes.currentDiv}>
                                        <Typography variant="display1" className={classes.current} component="h3">Current</Typography>
                                    </div>
                                }
                            </div>
                            <p className={classes.description}> 
                                {edu.description}
                            </p>
                            <Divider className={classes.divider}/>
                        </div>
                        
                    );
                })
            }
        </Paper>
    );
}

const styles = theme => ({
    contentPaper: {
        padding: 20,
        margin: 10,
        
    },
    grouping: {
        display: 'inline-flex',
        alignItems: 'center',
        flex: 1,
        marginBottom: 30,
    },
    minorGrouping: {
        display: 'inline-flex',
        alignItems: 'center',
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    icon: {
        marginRight: 10
    },
    currentDiv: {
        padding: 5,
        backgroundColor: palette.primary.main,
        borderRadius: 4,
        marginLeft: 5,
        
    },
    col: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    heading: {
        fontSize: 28,
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
        marginRight: 5,
    },
    org: {
        fontSize: 14,
    },
    date: {
        fontSize: 14,
        marginLeft: 5
    },
    description: {
        fontSize: 12
    },
    current: {
        fontSize: 14,
        color: 'white'
    },
    divider: {
        
    }
})

export default withStyles(styles)(Education);
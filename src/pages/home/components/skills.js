import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';

import {palette} from '../../../assets/theme.json';

const Skills = ({classes, skills}) => {
    return(
        <div className={classes.attributesContainer}>
            <div className={classes.attribute}>
                <FontAwesomeIcon color={palette.primary.main} icon="star" className="icon"/>
                <Typography className={classes.title} color={"textScondary"} variant="display1" component="h2">
                    Skills
                </Typography>
            </div>
            {
                skills.map(skill =>{
                    return(
                        <Typography className={classes.skill} color={"textPrimary"} variant="subheading" component="p">
                            {skill}
                        </Typography>
                    )
                })
            }
        </div>
    );
}

const styles = theme => ({
    attributesContainer: {
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    attribute: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        marginLeft: 10
    },
    skill: {
        fontSize: 14,
        padding: 5
    },
    icon: {
        
    }
})

export default withStyles(styles)(Skills);
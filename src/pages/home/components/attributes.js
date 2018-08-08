import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';

import Progress from './progress'
import {palette} from '../../../assets/theme.json'

const Attributes = ({classes, info, position, home, email, phone}) => {
    return(
        <div className={classes.attributesContainer}>
            <div className={classes.attribute}>
                <FontAwesomeIcon color={palette.primary.main} icon="toolbox" className={classes.icon}/> 
                <Typography className={classes.attr} color={"textSecondary"} variant="subheading" component="p">
                    {position}
                </Typography>
            </div>
            <div className={classes.attribute}>
            <FontAwesomeIcon color={palette.primary.main} icon="home" className={classes.icon}/> 
                <Typography className={classes.attr} color={"textSecondary"} variant="subheading" component="p">
                    {home}
                </Typography>
            </div>
            <div className={classes.attribute}>
            <FontAwesomeIcon color={palette.primary.main} icon="envelope" className={classes.icon}/> 
                <Typography className={classes.attr} color={"textSecondary"} variant="subheading" component="p">
                    {email}
                </Typography>
            </div>
            <div className={classes.attribute}>
                <FontAwesomeIcon color={palette.primary.main} icon="phone" className={classes.icon} flip="horizontal"/> 
                <Typography className={classes.attr} color={"textSecondary"} variant="subheading" component="p">
                    {phone}
                </Typography>
            </div>
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
        paddingTop: 10,
        alignItems: 'center',
    },
    attr: {
        fontSize: 12
    },
    icon: {
        padding: 5
    }
})

export default withStyles(styles)(Attributes);
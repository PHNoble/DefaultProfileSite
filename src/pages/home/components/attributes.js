import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
const Attributes = ({classes}) => {
    return(
        <div className={classes.attributesContainer}>
            <div className={classes.attribute}>
                <FontAwesomeIcon icon="toolbox" className={classes.icon}/> 
                <Typography component="p">asdasd</Typography>
            </div>
            <div className={classes.attribute}>
                <FontAwesomeIcon icon="home" className={classes.icon}/> 
                <Typography component="p">asdasd</Typography>
            </div>
            <div className={classes.attribute}>
                <FontAwesomeIcon icon="envelope" className={classes.icon}/> 
                <Typography component="p">asdasd</Typography>
            </div>
            <div className={classes.attribute}>
                <FontAwesomeIcon icon="phone" className={classes.icon} flip="horizontal"/> 
                <Typography component="p">asdasd</Typography>
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
    icon: {
        padding: 5
    }
})

export default withStyles(styles)(Attributes);
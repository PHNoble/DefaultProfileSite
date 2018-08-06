import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typography from '@material-ui/core/Typography';
const Languages = ({classes}) => {
    return(
        <div className={classes.attributesContainer}>
            <div className={classes.attribute}>
                <FontAwesomeIcon icon="terminal"  />
                <Typography className={classes.title} color={"textPrimary"} variant="display1" component="h2">
                    Programming <br/> Languages
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
        alignItems: 'center',
        textAlign: 'left'
    },
    title: {
        fontSize: 20,
        marginLeft: 10
    }
})

export default withStyles(styles)(Languages);
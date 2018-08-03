import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Attributes from './components/attributes';
import Skills from './components/skills';

class HomeTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <Paper className={classes.profilePaper}>
                        <paper className={classes.imgNameContainer}>
                            
                            <Typography variant="display1" component="h1" className={classes.name}>Davis Crawford</Typography>
                        </paper>
                        <Attributes />
                        <hr className={classes.divider}/>
                    </Paper>
                </div>
                <div className={classes.rightContainer}>
                    <Paper className={classes.contentPaper}>
                        <text> asdasdadsa d</text>
                    </Paper>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
    },
    leftContainer: {
        display: 'flex',
        flex: 1,
        marginLeft: 10,
    },
    rightContainer: {
        display: 'flex',
        flex: 2,
        marginRight: 10,
    },
    profilePaper: {
        flex: 1,
        margin: 10,
        height: '100%'
    },
    contentPaper: {
        flex: 1,
        padding: 10,
        margin: 10
    },
    imgNameContainer: {
        textAlign: 'left',
        width: '100%',
        backgroundImage: `url(http://www.stickpng.com/assets/images/5845cd430b2a3b54fdbaecf8.png)`
    },
    img: {
        width: '100%',
    },
    name: {
        marginLeft: 10,
        marginRight: 10,
        color: 'black',
        textShadowColor: 'white',
        fontSize: 24,
    },
    attributesContainer: {
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    attribute: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10
    },
    divider: {
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    }
})

export default withStyles(styles)(HomeTemplate)
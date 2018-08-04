import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Attributes from "./components/attributes";
import Skills from "./components/skills";
import pepe from "../../assets/pepe.png";
import Languages from './components/languages';
import WorkExperience from './components/workexperience';
import Education from './components/education';
import Bio from './components/bio'

class HomeTemplate extends Component {
  constructor(props) {
    super(props);
  }

    render() {
        const experience = [
            {
                title: "CTO",
                organization: "Outlit inc.",
                dates: {
                    start: "July 2017",
                    end: "August 2018"
                },
                description: "A DESCRIPTION OF DUTIES WOULD GO HERE"
            },
            {
                title: "faggot",
                organization: "gay inc.",
                dates: {
                    start: "July 2017"
                },
                description: "A DESCRIPTION OF DUTIES WOULD GO HERE"
            }
        ]
        const education = [
            {
                award: "Bachelors in Computer Science",
                organization: "Virginia Tech",
                dates: {
                    start: "August 2016",
                },
                description: ""
            }
        ]
        const bio = "REEEEEEEEEEEEEEE ajsdjkaskjdklasjdlk anksdnkjasn dkjnakjsdnkj anskdjnaksd kjaskdjnakj sndkjasdkj akjsndkja nskjd assjsjajsndnaks jasjkd kjasdjkh jshdk jasjd asdkj akjsdhk jasdkj h"
        const {classes} = this.props;
        console.log(this.props)
        return(
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <Paper className={classes.profilePaper}>
                        <Paper className={classes.imgNameContainer}>
                            <span className={classes.spanName}>
                                <Typography color="textPrimary" variant="headline" component="h1" className={classes.name}>Davis Crawford</Typography>
                            </span>
                        </Paper>
                        <Attributes />
                        <Divider className={classes.divider}/>
                        <Skills />
                        <Divider className={classes.divider}/>
                        <Languages />
                    </Paper>
                </div>
                <div className={classes.rightContainer}>
                    <WorkExperience experience={experience}/>
                    <Education education={education} />
                    <Bio bio={bio} />
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
        
        marginLeft: 10,
    },
    rightContainer: {
        flex: 2,
        marginRight: 10,
    },
    profilePaper: {
        flex: 1,
        margin: 10,
        height: '100%'
    },
    imgNameContainer: {
        position: 'relative',
        textAlign: "left",
        width: "100%",
        height: 200,
        backgroundImage: `url(${pepe})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      },
    img: {
        width: '100%',
    },
    name: {
        marginLeft: 10,
        marginRight: 10,
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
    spanName: {
        position: 'absolute',
        bottom: 0
    },
    divider: {
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    }
})
  
export default withStyles(styles)(HomeTemplate);

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Attributes from "./components/attributes";
import Skills from "./components/skills";
import ProfilePicture from "../../assets/profilepicture.png";
import Languages from "./components/languages";
import WorkExperience from "./components/workexperience";
import Education from "./components/education";
import Bio from "./components/bio";
import Projects from "./components/projects";
import Github from "./components/github";
import { isEmpty } from "lodash";

class HomeTemplate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      experience,
      username,
      education,
      bio,
      name,
      skills,
      position,
      home,
      email,
      phone,
      programingLanguages,
      projects,
      theme
    } = this.props;
    const { classes, details, repos } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <Paper className={classes.profilePaper}>
            <div className={classes.imgNameContainer}>
              <span className={classes.spanName}>
                <Typography
                  color="textPrimary"
                  variant="headline"
                  component="h1"
                  className={classes.name}
                >
                  {name}
                </Typography>
              </span>
            </div>
            <Attributes
              theme={theme}
              position={position}
              home={home}
              email={email}
              phone={phone}
            />
            <Divider className={classes.divider} />
            {programingLanguages && (
              <div>
                <Languages programingLanguages={programingLanguages} />
                <Divider className={classes.divider} />
              </div>
            )}
            <Skills skills={skills} />
          </Paper>
        </div>
        <div className={classes.rightContainer}>
          <Bio bio={bio} />
          <WorkExperience experience={experience} />
          <Education education={education} />
          <Projects projects={projects} />
          {!isEmpty(details) && (
            <Github details={details} username={username} repos={repos} />
          )}
        </div>
        <div className={classes.watermark}>
          <a href="https://github.com/PHNoble/defaultprofilesite" className={classes.attribution}>
            Created by: https://github.com/PHNoble/defaultprofilesite
          </a>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  leftContainer: {
    display: "flex",

    marginLeft: 10
  },
  rightContainer: {
    flex: 2,
    marginRight: 10
  },
  profilePaper: {
    flex: 1,
    margin: 10,
    height: "100%"
  },
  imgNameContainer: {
    position: "relative",
    textAlign: "left",
    width: "100%",
    height: 200,
    backgroundImage: `url(${ProfilePicture})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },
  img: {
    width: "100%"
  },
  name: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 24
  },
  attributesContainer: {
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    flexDirection: "column"
  },
  attribute: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10
  },
  spanName: {
    position: "absolute",
    bottom: 0
  },
  divider: {
    margin: 10,
    marginTop: 20,
    marginBottom: 20
  },
  watermark: {
    position: "fixed",
    bottom: 0,
    right: 30,
    zIndex: -1, 
  },
  attribution: {
      fontSize: 20, 
      fontFamily: 'typeface-roboto',
      fontWeight: '500'
  }
});

export default withStyles(styles)(HomeTemplate);

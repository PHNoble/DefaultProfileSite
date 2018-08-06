import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const Github = ({ classes, details, repos, stats }) => {
  return (
    <Paper className={classes.contentPaper}>
      <div className={classes.grouping}>
        <FontAwesomeIcon icon="project-diagram" size="2x" />
        <Typography
          color="textSecondary"
          variant="display1"
          className={classes.heading}
          component="h2"
        >
          Github Profile
        </Typography>
      </div>
      <div className={classes.col}>
        <div className={classes.minorGrouping}>
          <img src={details.picture} className={classes.profilePicture} />
          <div classes={classes.details}>
            <Typography
              color="textPrimary"
              variant="display1"
              className={classes.title}
              component="h3"
            >
              {`${details.name} (${details.username})`}
            </Typography>
            <p className={classes.description}>{details.bio}</p>
          </div>
        </div>
        <Divider className={classes.divider} />
      </div>
      <div className={classes.repos}>
        <Typography className={classes.repoHeading}>Public Repos</Typography>
        {repos.map((val, idx) => {
          return (
            <div className={classes.repo}>
              <div className={classes.repoTitle}>
                <a href={val.url} className={classes.repoName}>{val.name}</a>
                <p className={classes.repoLanguage}>{`(${val.language})`}</p>
              </div>
              <Divider className={classes.divider} />
            </div>
          );
        })}
      </div>
    </Paper>
  );
};

const styles = theme => ({
  contentPaper: {
    padding: 20,
    margin: 10
  },
  grouping: {
    display: "inline-flex",
    alignItems: "center",
    flex: 1,
    marginBottom: 10
  },
  minorGrouping: {
    display: "inline-flex",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    marginRight: 10
  },
  currentDiv: {
    padding: 5,
    backgroundColor: "lightblue",
    borderRadius: 4,
    marginLeft: 5
  },
  col: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: 10
  },
  details: {
    flexDirection: "column"
  },
  heading: {
    fontSize: 28,
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    marginRight: 5,
    fontWeight: "500"
  },
  org: {
    fontSize: 14
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
    color: "white"
  },
  profilePicture: {
    width: "8%",
    height: "8%",
    borderRadius: 10,
    marginRight: 10
  },
  repos: {
    marginLeft: 10,
    flexDirection: "column"
  },
  repoHeading: {
    fontSize: 18,
    fontWeight: '600'
  },
  repo: {
    marginLeft: 5,
  },
  repoTitle: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center'
  },
  repoName: {
    fontSize: 15,
    color: "#456",
    fontWeight: "600"
  },
  repoLanguage: {
    fontSize: 15,
    color: "#456",
    fontWeight: "600",
    marginLeft: 5,
  },
  divider: {}
});

export default withStyles(styles)(Github);

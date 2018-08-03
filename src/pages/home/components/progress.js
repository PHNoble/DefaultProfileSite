import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const Progress = ({ classes, percent, primaryColor, secondaryColor }) => (
  <div className={classes.container} style={{backgroundColor: secondaryColor}}>
    <div className={classes.progress} style={{ width: `${percent}%`, backgroundColor: primaryColor }}>
      <p className={classes.text}>{`${percent}%`}</p>
    </div>
  </div>
);

const styles = theme => ({
  container: {
    display: "flex",
    height: 15,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "rgb(231, 231, 231)"
  },
  progress: {
    display: "flex",
    height: 15,
    borderRadius: 20,
    backgroundColor: "rgb(29, 149, 136)",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: "Arial",
    fontWeight: "400",
    fontSize: 12,
    color: "rgb(231, 231, 231)"
  }
});

export default withStyles(styles)(Progress);

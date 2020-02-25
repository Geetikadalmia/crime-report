import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';


const styles = {
  root: {
    height: "100vh"
  },
  loginBox: {
    height: "60vh",

  }
};

function App(props) {
  const { classes } = props; 
  return (
    <div className="App">
      <Grid 
        container
        className={classes.root} 
        flexDirection="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Paper className={classes.loginBox}>
            test
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(App);
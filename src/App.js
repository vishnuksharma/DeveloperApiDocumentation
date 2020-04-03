import React from 'react';
import { navigate } from '@reach/router';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#1976d2',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
  },
  offset: theme.mixins.toolbar,
}));

function App({ children }) {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <AppBar className={classes.appBar}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>Documentation</Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      </Grid>
      
    </div>
  );
}

export default App;

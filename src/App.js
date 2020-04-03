import React from 'react';
// import { navigate } from '@reach/router';
import { Link } from "@reach/router"
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import RouterConstant from './Routes/routes';

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
  appContainer: {
    backgroundColor: '#e5e4e6',
    minHeight: '100vh',
  },
  appLinkColor: {
    color: '#fff',
    textDecoration: 'none',
  },
  toolbar: {
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      
    }
  }
}));

function App({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <Grid container>
        <Grid item xs={12}>
          <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Link className={classes.appLinkColor} to={`/${RouterConstant.ENTRY}${RouterConstant.LANDING}`}>
                <Typography variant="h6" className={classes.title}>Documentation</Typography>
              </Link>
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import CardComponent from '../CardLayout/Card.component';

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
  }));
const LandingPage = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <CardComponent />
                </Grid>
              </Grid>
            </div>
    )
}

export default LandingPage;
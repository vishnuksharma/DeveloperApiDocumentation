import React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // height: 450,
      width: '100%',
    },
    progress: {
      margin: theme.spacing(2),
    },
  }));
const LoadingComponent = props => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <div>
                <CircularProgress className={classes.progress} color="secondary" />
            </div>
        </Box>
    )
}

export default LoadingComponent;
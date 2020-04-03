import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { getDocByIdDataState, getIsDataLoading } from '../models/selectors';
import LoadingComponent from '../Loading/Loading.component';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: '80%',
      margin: '0 auto',
      [theme.breakpoints.down("sm")]: {
        maxWidth: '100%',
        margin: '20px',
      }
    },
  }));
const APIIntro = props =>{
  const {
    id,
    getDocumentDataById,
    documentData,
    isDataLoading
  } = props;

  useEffect(() => {
    getDocumentDataById({apiName: 'intro' , id});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const classes = useStyles();
    return(
      <div className={classes.root}>
        {isDataLoading ? (
          <LoadingComponent />
          ) : (
            <Grid container>
            <Grid item xs={12}>
              <Box py={5}>
              <Typography gutterBottom variant="h5" component="h2">
                {documentData.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {documentData.description}
              </Typography>
              </Box>
            </Grid>
          </Grid>
          )}
      </div>
  )
}

const mapState = (state) => {
  return {
    documentData: getDocByIdDataState(state),
    isDataLoading: getIsDataLoading(state),
  }
}

const mapDispatch = dispatch => {
  const { apiDocumentation: { getDocumentDataById } } = dispatch;
  return {
    getDocumentDataById
  }
}

export default connect(mapState, mapDispatch)(APIIntro);
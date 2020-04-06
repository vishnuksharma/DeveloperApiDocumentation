import React, { memo, useEffect, useState, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Grid, Typography, Box } from '@material-ui/core';
import CardComponent from '../CardLayout/Card.component';

import { getDocumentationListState, getIsDataLoading } from '../models/selectors'
import { LANDINGPAGE_HEADING, LANDINGPAGE_DESC, PAGE_LIMIT } from '../Utilities/constant';
import LoadingComponent from '../Loading/Loading.component';
import { isFullPageNotScrolled, delay } from '../Utilities/Utility';
import { getDocumentationList } from '../api/apiDocument';

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
    cardMargin: {
      margin: theme.spacing(2),
    },
  }));

const LandingPage = props =>{
  const { isDataLoading, getDocumentListData, documentList } = props;
  const classes = useStyles();
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);  
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCount(documentList.count);
    setListItems(documentList.documentList);
  }, [documentList]);

  const handleScroll = () => {
    if (isFullPageNotScrolled()) return;
    setIsFetching(true);
  };

  useEffect(() => {
    getDocumentListData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching && (count - page * PAGE_LIMIT) > 0) {
      setPage((pre) => {
        fetchMoreListItems({ page: pre + 1 });
        return pre + 1;
      });
    } else {
      setIsFetching(false);
    }
  }, [isFetching])

  const fetchMoreListItems = async ({ page, limit = PAGE_LIMIT } = {}) => {
    try {
      const list = await getDocumentationList(page, limit);
      await delay(2000)
      console.log(page, 'page');
      setListItems((pre) => {
        return [...pre, ...list.documentList];
      });
    } catch (error) {
      console.log(error);
    } finally{
      setIsFetching(false);
    }
  }

  const getCardlayout = () => {
    return (listItems || []).map(item => {
      return(
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <CardComponent {...props} cardData={item} />
        </Grid>
      )
    })
  }
    return(
        <div className={classes.root}>
              <Grid container>
                <Grid item xs={12}>
                  <Box py={5}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {LANDINGPAGE_HEADING}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {LANDINGPAGE_DESC}
                  </Typography>
                  </Box>
                </Grid>
                <Grid container spacing={2}>
                  {isDataLoading ? (
                    <LoadingComponent />
                  ) : (
                    getCardlayout()
                  )}
                  {/* <Suspense fallback={<LoadingComponent />}>
                    {getCardlayout()}
                  </Suspense> */}
                  {isFetching && <LoadingComponent />}
                </Grid>
              </Grid>
            </div>
    )
}

LandingPage.propTypes = {
}

LandingPage.defaultProps = {
}

const mapState = state => {
  return {
    documentList: getDocumentationListState(state),
    isDataLoading: getIsDataLoading(state),
  };
};

const mapDispatch = (dispatch) => {
  const { apiDocumentation: { getDocumentListData } } = dispatch;
  return {
    getDocumentListData,
  };
};

export default connect(mapState, mapDispatch)(memo(LandingPage));
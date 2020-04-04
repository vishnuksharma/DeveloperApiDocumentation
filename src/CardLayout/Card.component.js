import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import RoutesConstant from '../Routes/routes'
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) =>({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&:hover': {
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      transform: 'scale(1.04)',
    },
    // maxWidth: 345,
    [theme.breakpoints.down("sm")]: {
      // margin: '20px 0',
    }
  },
  cardBtnWrapper: {
    marginTop: 'auto',
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },
  avatarBg: {
    backgroundColor: '#4c97e0'
  },
}));

const CardComponent = props => {
  const { cardData, navigate } = props;
  const classes = useStyles();

  const clickHandler = (param) => {
    const { id } = cardData;
    navigate(`/${RoutesConstant.ENTRY}${RoutesConstant.API_PATH}/${param}/${id}`)
  }
  const getCardLinks = () => {
    return (cardData.links || []).map(link => {
      return (
        <React.Fragment key={link.label}>
          <CardActions key={link}>
            <Button onClick={() => clickHandler(link.href)} size="small" fullWidth color="primary">
              {link.label}
              <ArrowForwardIosIcon fontSize="small" className={classes.marginLeftAuto} />
            </Button>
          </CardActions>
          <Divider />
        </React.Fragment>
      )
    })
  }
  return (
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar className={classes.avatarBg}>{cardData.title[0]}</Avatar>}
          title={<Typography gutterBottom variant="h7" component="h5">
          {cardData.title}
        </Typography>}
          />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {cardData.description}
        </Typography>
        </CardContent>
        <div className={classes.cardBtnWrapper}>
          {cardData.links && getCardLinks()}
        </div>
      </Card>
  );
}

export default CardComponent;
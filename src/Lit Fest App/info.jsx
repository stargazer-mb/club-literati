import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Hidden,
  IconButton,
} from '@material-ui/core';
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  YouTube,
} from '@material-ui/icons';

import myLogo from '../resources/dev/mbwhite.png';
import CLlogo from '../resources/imgs/clblit.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: '#010038',
    color: 'white',
    minWidth: '80%',
    textAlign: 'center',
  },
  breakSpan: {
    height: '1rem',
    backgroundColor: 'purple',
    // backgroundImage:
    //   'linear-gradient(to right,violet,purple,blue,aqua,green,lime,yellow,orange,red)',
  },
  InstaIcon: {
    // margin: '0.25rem',
    '&:hover': {
      fontSize: '2.3rem',
      backgroundImage:
        'linear-gradient(to bottom, #8a3ab9,#bc2a8d,#e95950,#fbad50)',
    },
  },
  fbIcon: {
    '&:hover': {
      fontSize: '2.3rem',
      color: '#4267B2',
      backgroundColor: 'white',
    },
  },
  YTicon: {
    '&:hover': {
      fontSize: '2.3rem',
      color: '#FF0000',
      backgroundColor: 'white',
    },
  },
  MailIcon: {
    '&:hover': {
      fontSize: '2.3rem',
      color: '#FF0000',
      backgroundColor: 'white',
    },
  },
  socialMediaIconButton: {
    color: 'white',
  },
  devLogo: {
    height: '25vh',
    marginTop: '-1.5rem',
  },
  companyLogo: {
    maxHeight: '25vh',
    maxWidth: '75%',
  },
}));

export default function Info() {
  let classes = useStyles();
  return (
    <React.Fragment>
      <span>
        <div className={classes.breakSpan}></div>
      </span>
      <div className={classes.root}>
        <div>
          <Typography>FOLLOW US ON</Typography>
          <IconButton className={classes.socialMediaIconButton}>
            <Instagram fontSize='large' className={classes.InstaIcon} />
          </IconButton>
          <IconButton className={classes.socialMediaIconButton}>
            <Facebook fontSize='large' className={classes.fbIcon} />
          </IconButton>
          <IconButton className={classes.socialMediaIconButton}>
            <YouTube fontSize='large' className={classes.YTicon} />
          </IconButton>
          <IconButton className={classes.socialMediaIconButton}>
            <MailOutline fontSize='large' className={classes.MailIcon} />
          </IconButton>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Typography>DEVELOPER</Typography>
          <Hidden smUp>
            <Grid container>
              <Grid item xs={12} md={3}>
                <img src={myLogo} alt='dev logo' className={classes.devLogo} />
              </Grid>
              <Grid item xs={12} style={{ marginTop: '-1.5rem' }}>
                <Typography>for</Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <img
                  src={CLlogo}
                  alt='company logo'
                  className={classes.companyLogo}
                />
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <div style={{ display: 'flex' }}>
              <div style={{ marginLeft: '30%' }}>
                <img src={myLogo} alt='dev logo' className={classes.devLogo} />
              </div>
              <div>
                <Typography style={{ marginTop: '2rem' }}>for</Typography>
              </div>
              <div>
                <img
                  src={CLlogo}
                  alt='company logo'
                  className={classes.companyLogo}
                />
              </div>
            </div>
          </Hidden>
        </div>
      </div>
    </React.Fragment>
  );
}

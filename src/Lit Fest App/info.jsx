import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Hidden,
  IconButton,
  Link,
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
        'linear-gradient(to bottom left, #8a3ab9,#bc2a8d,#e95950,#fbad50)',
      borderRadius: '0.6rem',
    },
  },
  fbIcon: {
    '&:hover': {
      fontSize: '2.3rem',
      color: '#4267B2',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
  YTicon: {
    '&:hover': {
      fontSize: '2.3rem',
      color: '#FF0000',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
  MailIcon: {
    '&:hover': {
      fontSize: '2.3rem',
      color: '#FF0000',
      backgroundColor: 'white',
      borderRadius: '0.6rem',
    },
  },
  socialMediaIconButton: {
    color: 'white',
  },
  devLogo: {
    height: '15vh',
    // marginTop: '-1.5rem',
  },
  companyLogo: {
    maxHeight: '20vh',
    maxWidth: '75%',
  },
}));

export default function Info() {
  let classes = useStyles();

  function copyToClipboard() {
    navigator.clipboard.writeText('mlrliterati@gmail.com');
    alert('Mail Address Copied ');
  }

  return (
    <React.Fragment>
      <span>
        <div className={classes.breakSpan}></div>
      </span>
      <div className={classes.root}>
        <div>
          <Typography>FOLLOW US ON</Typography>
          <Link
            href='https://instagram.com/mlrclubliterati?utm_medium=copy_link'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <IconButton className={classes.socialMediaIconButton}>
              <Instagram fontSize='large' className={classes.InstaIcon} />
            </IconButton>
          </Link>
          <Link
            href='https://www.facebook.com/mlrclubliterati/'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <IconButton className={classes.socialMediaIconButton}>
              <Facebook fontSize='large' className={classes.fbIcon} />
            </IconButton>
          </Link>
          <Link
            href='https://youtube.com/channel/UCQ_QmaXV0yAg18r6oIyiakw'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <IconButton className={classes.socialMediaIconButton}>
              <YouTube fontSize='large' className={classes.YTicon} />
            </IconButton>
          </Link>
          <IconButton
            className={classes.socialMediaIconButton}
            onClick={copyToClipboard}
          >
            <MailOutline fontSize='large' className={classes.MailIcon} />
          </IconButton>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Typography>DEVELOPER</Typography>
          <Hidden smUp>
            <Grid container>
              <Grid item xs={12} md={3}>
                <Link
                  href='https://www.linkedin.com/in/mb2052'
                  target='_blank'
                  rel='noopener'
                  color='inherit'
                >
                  <img
                    src={myLogo}
                    alt='dev logo'
                    className={classes.devLogo}
                  />
                </Link>
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
                <Link
                  href='https://www.linkedin.com/in/mb2052'
                  target='_blank'
                  rel='noopener'
                  color='inherit'
                >
                  <img
                    src={myLogo}
                    alt='dev logo'
                    className={classes.devLogo}
                  />
                </Link>
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

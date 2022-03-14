import { Divider, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

let useStyles = makeStyles((theme) => ({
  container: {},
  button: {
    textAlign: 'center',
    color: 'white',
    width: '95%',
    // border: '1px solid white',
    padding: '1rem',
    marginBlock: '1rem',
    backgroundImage: 'linear-gradient(to right, #151D3B,#D82148)',
    '&:hover': {
      // backgroundImage: 'linear-gradient(to right,#00B4D8,#03045E)',
      backgroundImage: 'linear-gradient(to right, #D82148,#D82148)',
      fontSize: '0.9rem',
    },
  },
  btntxt: {
    fontFamily: 'Poppins, sans-serif',
  },
}));

function Registration() {
  let classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSfy40-jlsPk_fJW8wbM4VazNNBYexKneauXjDDS_ylz2PD-yA/viewform'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <Paper className={classes.button}>
              <Typography className={classes.btntxt}>Art Gallery</Typography>{' '}
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSeC1PVKcZ-iMPj74icYfyfZMbUvuRs3Rwu5pamsofpzxUebhA/viewform'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <Paper className={classes.button}>
              <Typography className={classes.btntxt}>
                Individual Events
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSfVO6C28rh3C836jkos0GNH7mq9lis5N_tLrXaP_wCSIhu66A/viewform'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <Paper className={classes.button}>
              <Typography className={classes.btntxt}>Group Events</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            href='https://drive.google.com/file/d/1YturquQ13PaCLED_axxFrv964bnI_o92/view?usp=sharing'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <Paper className={classes.button}>
              <Typography className={classes.btntxt}>Event Brochure</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Registration;

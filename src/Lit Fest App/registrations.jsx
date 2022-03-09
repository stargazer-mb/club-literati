import { Divider, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';

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
}));

function Registration() {
  let classes = useStyles();
  return (
    <React.Fragment>
      <Typography>Registrations</Typography>
      <Divider />
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSfy40-jlsPk_fJW8wbM4VazNNBYexKneauXjDDS_ylz2PD-yA/viewform'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <div className={classes.button}>Art Gallery</div>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSeC1PVKcZ-iMPj74icYfyfZMbUvuRs3Rwu5pamsofpzxUebhA/viewform'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <div className={classes.button}>Individual Events</div>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link
            href='https://docs.google.com/forms/d/e/1FAIpQLSfVO6C28rh3C836jkos0GNH7mq9lis5N_tLrXaP_wCSIhu66A/viewform'
            target='_blank'
            rel='noopener'
            color='inherit'
          >
            <div className={classes.button}>Group Events</div>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Link href='' target='_blank' rel='noopener' color='inherit'>
            <div className={classes.button}>Event Brochure</div>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Registration;

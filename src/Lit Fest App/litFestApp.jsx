import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import LitFest from './index';
import Timer from './timer';
import Info from './info';

import clblit from '../resources/imgs/clblit.png';
import news from '../resources/imgs/lit fest/Lit Fest Logo.png';
import titlebg from '../resources/backgrounds/try5.jpg';
import appbg from '../resources/backgrounds/tex4.jpg';
import infobg from '../resources/backgrounds/tex3.jpg';
import litFestPoster from '../resources/imgs/lit fest/Lit Fest Logo.png';

import '../App.css';
import AnimatedText from '../components/Reusable Components/animatedText';
import { Parallax } from 'react-parallax';
import { Event, Room } from '@material-ui/icons';
import { Divider, Grid, Hidden, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#ffffff',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  logo: {
    maxHeight: '30vh',
    marginBlock: '1rem',
  },
}));

export default function LitFestApp() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <img
            src={clblit}
            style={{
              height: '4rem',
              display: 'flex',
              marginInline: 'auto',
            }}
            alt='club-lit logo'
          />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}></nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Parallax bgImage={titlebg} strength={-600} blur={{ min: -1, max: 3 }}>
          <div
            style={{
              height: '100vh',
            }}
          >
            <div
              style={{
                // background: 'white',
                // padding: 20,
                color: 'white',
                position: 'absolute',
                minWidth: '80%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                textAlign: 'center',
              }}
            >
              <Typography>
                content lorem ipsum dolor amet (intro) lorem ipsum dolor amet
                lorem ipsum dolor amet lorem ipsum dolor amet
              </Typography>
              {/* <div
                style={{
                  backgroundColor: 'inherit',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AnimatedText
                  txt={'LITERARY FESTIVAL'}
                  variant='h1'
                  colors={['#ee9ca7', '#ffdde1', '#2193b0', '#6dd5ed']}
                />
              </div> */}
              <div>
                <img
                  src={litFestPoster}
                  alt='poster'
                  className={classes.logo}
                />
              </div>
              <div>
                <Grid container>
                  <Hidden smDown>
                    <Grid item md={3}></Grid>
                  </Hidden>
                  <Grid item xs={12} md={3} style={{ paddingBottom: '0.5rem' }}>
                    <Typography>
                      <Link
                        href='https://goo.gl/maps/kKxYrTPiHkzdxJqKA'
                        target='_blank'
                        rel='noopener'
                        color='inherit'
                      >
                        <Room
                          fontSize='inherit'
                          style={{ marginBottom: '-0.1rem' }}
                        />
                        {' MLR Institute Of Technology'}
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={3} style={{ paddingBottom: '0.5rem' }}>
                    <Typography>
                      <Link href='' rel='noopener' color='inherit' download>
                        <Event
                          fontSize='inherit'
                          style={{ marginBottom: '-0.1rem' }}
                        />
                        {' 26-03-2022'}
                      </Link>
                    </Typography>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={3}></Grid>
                  </Hidden>
                </Grid>
              </div>
              <div
                style={{
                  backgroundColor: 'inherit',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AnimatedText
                  txt={<Timer ddmmyyyy='26032022' />}
                  variant='h2'
                  colors={['#ee9ca7', '#ffdde1', '#2193b0', '#6dd5ed']}
                />
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={appbg} strength={800}>
          <div
            style={{
              minHeight: '90vh',
              height: 'auto',
            }}
          >
            <div>
              <LitFest />
            </div>
          </div>
        </Parallax>

        <Info />
      </main>
    </div>
  );
}

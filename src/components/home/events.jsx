import {
  Divider,
  Paper,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import React from 'react';
import { Parallax } from 'react-parallax';
import { makeStyles } from '@material-ui/core';

import tedxbg from '../../resources/imgs/parallax/bg1.jpg';
import munbg from '../../resources/imgs/parallax/bg2.jpg';
import litFestbg from '../../resources/imgs/parallax/bg3.jpg';

import tedx from '../../resources/imgs/tedx/tedxmlrit.jpg';
import mun from '../../resources/imgs/mun/mun.jpg';
import litfest from '../../resources/imgs/lit fest/lit fest.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    maxWidth: '100%',
    // maxHeight: "30vh",
  },
}));

function Events() {
  let classes = useStyles();
  return (
    <React.Fragment>
      <Parallax bgImage={tedxbg} strength={600}>
        <div className={classes.root}>
          <Paper
            elevation={5}
            style={{
              maxWidth: '80%',
              backgroundColor: 'black',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <Grid
              container
              style={
                {
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                }
              }
            >
              <Grid item xs={12} md={6}>
                <img src={tedx} alt='tedxmlrit' className={classes.logo} />
              </Grid>
              <Grid item xs={1} md={1}>
                <Divider
                  orientation='vertical'
                  style={{
                    color: 'white',
                    width: '0.05rem',
                    marginInline: '0.5rem',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography paragraph style={{ color: 'white' }}>
                  Editions and theme
                  <br />
                  xdfcgvhbj
                  <br />
                  xdfcgvhbj
                  <br />
                  xdfcgvhbj
                  <br />
                  xdfcgvhbj
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Parallax>
      <Parallax bgImage={litFestbg} strength={-600}>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card style={{ width: '90%' }}>
            <CardActionArea>
              <CardMedia
                image={litfest}
                style={{ height: 200 }}
                title='event'
              />
              <CardContent>
                <Typography paragraph>
                  Editions and theme
                  <br />
                  xdfcgvhbj
                  <br />
                  xdfcgvhbj
                  <br />
                  xdfcgvhbj
                  <br />
                  xdfcgvhbj
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>
      </Parallax>
      <Parallax bgImage={munbg} strength={600}>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Paper
            id='homeContentDiv'
            elevation={5}
            style={{
              maxWidth: '80%',
            }}
          >
            <Typography id='contentHead' variant='h6'>
              MUN Logo
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Editions and theme
            </Typography>
          </Paper>
        </div>
      </Parallax>
      <Parallax bgImage={litFestbg} strength={-600}>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Paper
            id='homeContentDiv'
            elevation={5}
            style={{
              maxWidth: '80%',
            }}
          >
            <Typography id='contentHead' variant='h6'>
              Lit Fest Logo
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Editions and theme
            </Typography>
          </Paper>
        </div>
      </Parallax>
    </React.Fragment>
  );
}

export default Events;

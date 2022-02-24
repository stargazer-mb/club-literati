import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import Events from './events';
import Gallery from '../Reusable Components/gallery';

import './home.css';

import test1 from '../../resources/imgs/news.jpg';
import test2 from '../../resources/imgs/tedx/tedxmlrit.jpg';
import test3 from '../../resources/imgs/lit fest/lit fest.jpg';
import test4 from '../../resources/imgs/parallax/bg1.jpg';
import test5 from '../../resources/imgs/parallax/bg2.jpg';
import test6 from '../../resources/imgs/parallax/bg3.jpg';
import test7 from '../../resources/imgs/mun/mun.jpg';
import test8 from '../../resources/imgs/clblit.png';
import test9 from '../../resources/imgs/news.jpg';
import test10 from '../../resources/imgs/tedx/tedxmlrit.jpg';
import test11 from '../../resources/imgs/lit fest/lit fest.jpg';
import test12 from '../../resources/imgs/parallax/bg1.jpg';
import test13 from '../../resources/imgs/parallax/bg2.jpg';
import test14 from '../../resources/imgs/parallax/bg3.jpg';
import test15 from '../../resources/imgs/mun/mun.jpg';
import test16 from '../../resources/imgs/clblit.png';
import test17 from '../../resources/imgs/parallax/bg3.jpg';

const useStyles = makeStyles((theme) => ({}));

let imageList = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
  test13,
  test14,
  test15,
  test16,
  test17,
];

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <React.Fragment>
        <Typography variant='h5'>About</Typography>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
            <Paper id='homeContentDiv' elevation={5}>
              <Typography id='contentHead' variant='h6'>
                Content Heading
              </Typography>
              <hr />
              <Typography id='contentBody' paragraph>
                lorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor
                ametlorem ipsum dolor ametlorem ipsum dolor amet
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper id='homeContentDiv' elevation={5}>
              <Typography id='contentBody' paragraph>
                just content lorem ipsum dolor ametlorem ipsum dolor ametlorem
                ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor amet
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper id='circContentDiv' elevation={5}>
              <Typography id='contentHead' variant='h6'>
                Content Heading
              </Typography>
              <hr />
              <Typography id='contentBody' paragraph>
                Content Body lorem ipsum dolor ametlorem ipsum dolor ametlorem
                ipsum dolor ametlorem ipsum dolor amet lorem ipsum dolor
                ametlorem ipsum dolor amet
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>

      <React.Fragment>
        <Typography variant='h5'>Events</Typography>
        <Events />
      </React.Fragment>

      <React.Fragment>
        <Typography variant='h5'>Gallery</Typography>
        <Gallery imgList={imageList} />
      </React.Fragment>
    </React.Fragment>
  );
}

export default Home;

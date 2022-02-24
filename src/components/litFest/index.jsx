import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Typography, Paper } from '@material-ui/core';
import news from '../../resources/imgs/parallax/lit fest.jpg';
import Events from './events';
import Highlights from './highlights';
import Gallery from '../Reusable Components/gallery';

import './litFest.css';

const useStyles = makeStyles((theme) => ({}));

function LitFest() {
  const classes = useStyles();

  const [about, setAbout] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [highlights, setHighlights] = useState(false);

  const handleAbout = () => {
    setAbout(true);
    setGallery(false);
    setHighlights(false);
  };

  const handleGallery = () => {
    setAbout(false);
    setGallery(true);
    setHighlights(false);
  };

  const handleHighlights = () => {
    setAbout(false);
    setGallery(false);
    setHighlights(true);
  };

  return (
    <div id='litFestRoot'>
      <div id='newsImgDiv'>
        <Paper>
          <a href='http://bit.ly/litfest2022' target='_blank'>
            <img
              src={news}
              style={{ height: 'auto', maxWidth: '100%' }}
              alt='news'
              title='Click to Register'
            />
          </a>
        </Paper>
      </div>

      <div id='inPgNav'>
        <Paper elevation={0} id='inPgNavBtn'>
          <Button color='primary' variant='contained' onClick={handleAbout}>
            About
          </Button>
        </Paper>

        <Paper elevation={0} id='inPgNavBtn'>
          <Button
            color='primary'
            variant='contained'
            onClick={handleHighlights}
          >
            Highlights
          </Button>
        </Paper>

        <Paper elevation={0} id='inPgNavBtn'>
          <Button color='primary' variant='contained' onClick={handleGallery}>
            Gallery
          </Button>
        </Paper>
      </div>

      {about ? (
        <React.Fragment>
          <Paper id='contentDiv' elevation={5}>
            <Typography id='contentHead' variant='h6'>
              Content Heading
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Content Body... lorem ipsum dolor ametlorem ipsum dolor ametlorem
              ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor amet
            </Typography>
          </Paper>
          <Events />
        </React.Fragment>
      ) : (
        ''
      )}
      {gallery ? (
        <React.Fragment>
          <Typography paragraph>
            Gallery <br />
          </Typography>
          <Gallery imgList={[]} />
        </React.Fragment>
      ) : (
        ''
      )}
      {highlights ? <Highlights /> : ''}
    </div>
  );
}

export default LitFest;

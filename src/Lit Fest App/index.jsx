import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Typography, Paper } from '@material-ui/core';
import litFestPoster from '../resources/imgs/lit fest/Lit Fest Logo.png';
import Events from './events';
import Highlights from './highlights';
import Gallery from '../components/Reusable Components/gallery';
import Registration from './registrations';

import './litFest.css';

const useStyles = makeStyles((theme) => ({}));

function LitFest() {
  const classes = useStyles();

  const [about, setAbout] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [highlights, setHighlights] = useState(false);
  const [register, setRegister] = useState(false);

  const handleAbout = () => {
    setAbout(true);
    setGallery(false);
    setHighlights(false);
    setRegister(false);
  };

  const handleGallery = () => {
    setAbout(false);
    setGallery(true);
    setHighlights(false);
    setRegister(false);
  };

  const handleHighlights = () => {
    setAbout(false);
    setGallery(false);
    setHighlights(true);
    setRegister(false);
  };

  const handleRegister = () => {
    setAbout(false);
    setGallery(false);
    setHighlights(false);
    setRegister(true);
  };

  return (
    <div style={{ padding: '24px' }}>
      <div>
        <div>
          {/* <video autoPlay controls style={{ height: '150px' }}>
            <source
              src='https://www.youtube.com/watch?v=oUFJJNQGwhk'
              type='video/mp4'
            ></source>
          </video> */}
        </div>
        <div id='newsImgDiv'>
          <img
            src={litFestPoster}
            style={{ height: 'auto', maxWidth: '100%' }}
            alt='poster'
            onClick={handleRegister}
          />
        </div>
      </div>
      <div id='inPgNavContainer'>
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
              onClick={handleRegister}
            >
              Register
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

          <Typography>Video</Typography>

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
      {register ? <Registration /> : ''}
    </div>
  );
}

export default LitFest;

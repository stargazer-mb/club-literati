import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Typography, Paper } from '@material-ui/core';
import litFestPoster from '../resources/imgs/lit fest/poster.png';
import Events from './events';
import Highlights from './highlights';
import Gallery from '../components/Reusable Components/gallery';
import Registration from './registrations';

import './litFest.css';

import img1 from '../resources/imgs/lit fest/Gallery/1.JPG';
import img2 from '../resources/imgs/lit fest/Gallery/2.JPG';
import img3 from '../resources/imgs/lit fest/Gallery/3.jpg';
import img4 from '../resources/imgs/lit fest/Gallery/4.jpg';
import img5 from '../resources/imgs/lit fest/Gallery/5.JPG';
import img6 from '../resources/imgs/lit fest/Gallery/6.jpg';
import img7 from '../resources/imgs/lit fest/Gallery/7.JPG';
import img8 from '../resources/imgs/lit fest/Gallery/8.jpg';
import img9 from '../resources/imgs/lit fest/Gallery/9.JPG';
import img10 from '../resources/imgs/lit fest/Gallery/10.JPG';
import img11 from '../resources/imgs/lit fest/Gallery/11.jpg';
import img12 from '../resources/imgs/lit fest/Gallery/12.JPG';
import img13 from '../resources/imgs/lit fest/Gallery/13.JPG';
import img14 from '../resources/imgs/lit fest/Gallery/14.JPG';

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
            style={{ maxHeight: '50vh', maxWidth: '100%' }}
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
          <Typography>Literary Events</Typography>
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
          <Gallery
            imgList={[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img8,
              img9,
              img10,
              img11,
              img12,
              img13,
              img14,
            ]}
          />
        </React.Fragment>
      ) : (
        ''
      )}
      {highlights ? (
        <React.Fragment>
          <Typography>Highlights</Typography>
          <Highlights />
        </React.Fragment>
      ) : (
        ''
      )}
      {register ? (
        <React.Fragment>
          <Typography>Registrations</Typography>
          <Registration />
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
}

export default LitFest;

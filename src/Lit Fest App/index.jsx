import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, Typography, Paper } from '@material-ui/core';
import litFestPoster from '../resources/imgs/lit fest/poster.png';
import Events from './events';
import Highlights from './highlights';
import Gallery from '../components/Reusable Components/gallery';
import Registration from './registrations';
import clsx from 'clsx';

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

import underLine from '../resources/aesthetics/ul_black.png';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.5rem',
    marginBlock: '1rem',
  },
  underLine: {
    maxWidth: '80%',
    marginTop: '-1rem',
    marginBottom: '1rem',
  },
  btnIdle: {
    backgroundColor: '#1b5e20',
    color: '#ffca28',
  },
  btnSelect: {
    backgroundColor: '#ffca28',
    color: '#1b5e20',
  },
  btnTxtSelect: {
    fontFamily: 'Poppins,sans-serif',
    padding: '0.5rem',
  },
  btnTxtIdle: {
    fontFamily: 'Poppins,sans-serif',
  },
}));

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
            <Button
              variant='contained'
              onClick={handleAbout}
              className={about ? classes.btnSelect : classes.btnIdle}
            >
              <Typography
                className={about ? classes.btnTxtSelect : classes.btnTxtIdle}
              >
                ABOUT
              </Typography>
            </Button>
          </Paper>

          <Paper elevation={0} id='inPgNavBtn'>
            <Button
              variant='contained'
              onClick={handleRegister}
              className={register ? classes.btnSelect : classes.btnIdle}
            >
              <Typography
                className={register ? classes.btnTxtSelect : classes.btnTxtIdle}
              >
                REGISTER
              </Typography>
            </Button>
          </Paper>

          <Paper elevation={0} id='inPgNavBtn'>
            <Button
              variant='contained'
              onClick={handleHighlights}
              className={highlights ? classes.btnSelect : classes.btnIdle}
            >
              <Typography
                className={
                  highlights ? classes.btnTxtSelect : classes.btnTxtIdle
                }
              >
                HIGHLIGHTS
              </Typography>
            </Button>
          </Paper>

          <Paper elevation={0} id='inPgNavBtn'>
            <Button
              variant='contained'
              onClick={handleGallery}
              className={gallery ? classes.btnSelect : classes.btnIdle}
            >
              <Typography
                className={gallery ? classes.btnTxtSelect : classes.btnTxtIdle}
              >
                GALLERY
              </Typography>
            </Button>
          </Paper>
        </div>
      </div>

      {about ? (
        <React.Fragment>
          <Typography className={classes.heading}>Literary Events</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={underLine}
              alt='under line'
              className={classes.underLine}
            />
          </div>
          <Events />
        </React.Fragment>
      ) : (
        ''
      )}
      {gallery ? (
        <React.Fragment>
          <Typography className={classes.heading}>Gallery</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={underLine}
              alt='under line'
              className={classes.underLine}
            />
          </div>
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
          <Typography className={classes.heading}>Highlights</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={underLine}
              alt='under line'
              className={classes.underLine}
            />
          </div>
          <Highlights />
        </React.Fragment>
      ) : (
        ''
      )}
      {register ? (
        <React.Fragment>
          <Typography className={classes.heading}>Registrations</Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={underLine}
              alt='under line'
              className={classes.underLine}
            />
          </div>
          <Registration />
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
}

export default LitFest;

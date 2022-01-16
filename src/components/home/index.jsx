import React, { useState } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import news from "../../resources/imgs/news.jpg";

import "./home.css";
import Events from "./events";

const useStyles = makeStyles((theme) => ({
  inPgNavButton: {
    borderRadius: "2rem",
    backgroundImage:
      "conic-gradient(purple,violet,blue,aqua,green,lime,yellow,orange,red)",
  },
}));

function Home() {
  const classes = useStyles();

  const [aboutUs, setAboutUs] = useState(true);
  const [events, setEvents] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [teamLit, setTeamLit] = useState(false);

  const handleAboutUs = () => {
    setAboutUs(true);
    setEvents(false);
    setGallery(false);
    setTeamLit(false);
  };

  const handleEvents = () => {
    setAboutUs(false);
    setEvents(true);
    setGallery(false);
    setTeamLit(false);
  };

  const handleGallery = () => {
    setAboutUs(false);
    setEvents(false);
    setGallery(true);
    setTeamLit(false);
  };

  const handleTeamLit = () => {
    setAboutUs(false);
    setEvents(false);
    setGallery(false);
    setTeamLit(true);
  };

  return (
    <React.Fragment>
      <div id='inPgNav'>
        <Paper elevation={5} id='inPgNavBtn'>
          <Button
            color='primary'
            variant='contained'
            onClick={handleAboutUs}
            className={classes.inPgNavButton}
          >
            <Typography id='contentHead'>About Us</Typography>
          </Button>
        </Paper>

        <Paper elevation={5} id='inPgNavBtn' onClick={handleEvents}>
          <Button color='primary' variant='contained'>
            <Typography id='contentBody'>Events</Typography>
          </Button>
        </Paper>

        <Paper elevation={5} id='inPgNavBtn' onClick={handleGallery}>
          <Button color='primary' variant='contained'>
            Gallery
          </Button>
        </Paper>

        <Paper elevation={5} id='inPgNavBtn' onClick={handleTeamLit}>
          <Button color='primary' variant='contained'>
            Team Literati
          </Button>
        </Paper>
      </div>
      {aboutUs ? (
        <React.Fragment>
          <Paper id='contentDiv' elevation={5}>
            <Typography id='contentHead' variant='h6'>
              Mission
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              lorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor
              ametlorem ipsum dolor ametlorem ipsum dolor amet
            </Typography>
          </Paper>
          <Paper id='contentDiv' elevation={5}>
            <Typography id='contentHead' variant='h6'>
              Vision
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              lorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor
              ametlorem ipsum dolor ametlorem ipsum dolor amet
            </Typography>
          </Paper>
          <Paper id='contentDiv' elevation={5}>
            <Typography id='contentHead' variant='h6'>
              Motto
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              lorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor
              ametlorem ipsum dolor ametlorem ipsum dolor amet
            </Typography>
          </Paper>
        </React.Fragment>
      ) : (
        ""
      )}
      {events ? (
        <React.Fragment>
          {" "}
          <Events />
        </React.Fragment>
      ) : (
        ""
      )}
      {gallery ? (
        <Typography paragraph>
          Gallery <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      ) : (
        ""
      )}
      {teamLit ? (
        <Typography paragraph>
          Team Literati <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default Home;

import React, { useState } from "react";
import { Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import news from "../../resources/imgs/news.jpg";

import "./home.css";
import Events from "./events";
import AnimatedText from "../animatedText";

const useStyles = makeStyles((theme) => ({
  inPgNavButton: {
    borderRadius: "2rem",
    backgroundImage:
      "conic-gradient(purple,violet,blue,aqua,green,lime,yellow,orange,red)",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <React.Fragment>
        <Typography variant='h5'>About</Typography>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </React.Fragment>

      <React.Fragment>
        <Typography variant='h5'>Events</Typography>
        <Events />
      </React.Fragment>

      <Typography paragraph>
        <Typography variant='h5'>Gallery</Typography>
        Gallery <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Events from "./events";
import Gallery from "../Reusable Components/gallery";

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
            <Paper id='contentDiv' elevation={5}>
              <Typography id='contentBody' paragraph>
                just content lorem ipsum dolor ametlorem ipsum dolor ametlorem
                ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor amet
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper id='contentDiv' elevation={5}>
              <Typography id='contentHead' variant='h6'>
                Content Heading
              </Typography>
              <hr />
              <Typography id='contentBody' paragraph>
                Content Body lorem ipsum dolor ametlorem ipsum dolor ametlorem
                ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor amet
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
        <Gallery />
      </React.Fragment>
    </React.Fragment>
  );
}

export default Home;

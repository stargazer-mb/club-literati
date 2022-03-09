import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import EventCard from '../components/Reusable Components/eventCard';
import SlamPoetryImg from '../resources/report msgs/cs1.jpg';
import LitriviaImg from '../resources/report msgs/cs2.jpg';

export default function Events() {
  return (
    <React.Fragment>
      <Typography>Events</Typography>
      <Grid container>
        <EventCard
          title='Find Your Voice'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={SlamPoetryImg}
        />
        <EventCard
          title='A Tale of Four'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={SlamPoetryImg}
        />
        <EventCard
          title='Litrivia'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={LitriviaImg}
        />
        <EventCard
          title='Bookathon'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={LitriviaImg}
        />
        <EventCard
          title='Screen Battles'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={LitriviaImg}
        />
        <EventCard
          title='Photography Contest'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={SlamPoetryImg}
        />
        <EventCard
          title='Treasure Hunt'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={LitriviaImg}
        />
        <EventCard
          title='BBDM'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={LitriviaImg}
        />
      </Grid>
    </React.Fragment>
  );
}

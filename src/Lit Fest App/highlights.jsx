import React from 'react';
import CountUp from 'react-countup';

import { Divider, Grid, Typography, makeStyles } from '@material-ui/core';
import CountCard from '../components/Reusable Components/countCard';
import { AllInclusive } from '@material-ui/icons';

let participationCount = (
  <CountUp end={5000} suffix={'+'} duration={5}></CountUp>
);
let eventsCount = <CountUp end={10} suffix={'+'} duration={3}></CountUp>;
let registrationsCount = (
  <CountUp end={1000} suffix={'+'} duration={4}></CountUp>
);
let prizeMCount = <CountUp end={20} suffix={'K+'} duration={3}></CountUp>;
let sponsorsCount = <CountUp end={10} suffix={'+'} duration={3}></CountUp>;

let useStyles = makeStyles((theme) => ({}));

let Highlights = () => {
  let classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <CountCard
          count={participationCount}
          name='Participation'
          xs={6}
          md={4}
        />
        <CountCard count={eventsCount} name='Events' xs={6} md={4} />
        <CountCard
          count={registrationsCount}
          name='Registrations'
          xs={6}
          md={4}
        />
        <CountCard count={sponsorsCount} name='Sponsors' xs={6} md={4} />
        <CountCard count={prizeMCount} name='Prize Money' xs={6} md={4} />
        <CountCard
          count={<AllInclusive style={{ fontSize: '3rem' }} />}
          name='FUN'
          xs={6}
          md={4}
        />
      </Grid>
      {/* <div>
        <Typography variant='h5'>Sponsors</Typography>
      </div>
      <div>
        <Typography>
          Sponsor stalls, Food trucks, AutoExpo, Art Gallery, Music, DJ
        </Typography>
      </div> */}
    </React.Fragment>
  );
};
export default Highlights;

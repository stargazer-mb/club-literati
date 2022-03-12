import React from 'react';

import { Card, Grid, Typography } from '@material-ui/core';

const CountCard = (props) => {
  return (
    <Grid item xs={props.xs} md={props.md} style={{ marginBlock: '3%' }}>
      <Card
        elevation={0}
        style={{
          backgroundColor: 'inherit',
          textAlign: 'center',
        }}
      >
        <Typography
          variant='h3'
          style={{ fontFamily: 'Permanent Marker, cursive' }}
        >
          {props.count}
        </Typography>
        <Typography
          variant='h6'
          style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 500 }}
        >
          {props.name}
        </Typography>
      </Card>
    </Grid>
  );
};

export default CountCard;

import React from 'react';

import { Card, Grid, Typography } from '@material-ui/core';

const CountCard = (props) => {
  return (
    <React.Fragment>
      <Grid item xs={props.xs} md={props.md}>
        <Card
          elevation={0}
          style={{
            backgroundColor: 'inherit',
            textAlign: 'center',
          }}
        >
          <Typography variant='h3'>{props.count}</Typography>
          <Typography variant='h6'>{props.name}</Typography>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default CountCard;

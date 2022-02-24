import React from 'react';

import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

let Gallery = (props) => {
  let classes = useStyles();

  let list = [[], [], [], []];
  let r = 0;
  for (let i = 0; i < props.imgList.length; i++) {
    list[r].push(props.imgList[i]);
    r++;
    r %= 4;
  }

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        {list.map((item, key) => {
          return (
            <Grid item xs={6} md={3} key={key}>
              {item.map((item, key) => {
                return (
                  <img
                    src={item}
                    alt='qwer'
                    style={{ width: '97%' }}
                    key={key}
                  />
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Gallery;

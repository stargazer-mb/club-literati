import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, ButtonGroup, Typography, Paper } from "@material-ui/core";
import news from "../../resources/imgs/news.jpg";

const useStyles = makeStyles((theme) => ({
  picture: {
    display: "grid",
    justifyContent: "center",
  },
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.picture}>
        <Paper>
          <a href='http://bit.ly/litfest2022' target='_blank'>
            <div id='newsImgDiv'>
              <img
                src={news}
                style={{ height: "auto", maxWidth: "100%" }}
                alt='news'
                title='Click to Register'
              />
            </div>
          </a>
        </Paper>
      </div>
      <div>social media icon click redirection</div>
    </React.Fragment>
  );
}

export default ContactUs;

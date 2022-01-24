import React from "react";
import { Typography } from "@material-ui/core";
import EventCard from "./eventCard";
import SlamPoetryImg from "../../resources/report msgs/cs1.jpg";
import LitriviaImg from "../../resources/report msgs/cs2.jpg";

export default function Events() {
  return (
    <React.Fragment>
      <Typography paragraph>
        Events
        <EventCard
          title='Slam Poetry'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={
            <img src={SlamPoetryImg} alt='Slam Poetry' id='eventCardImg'></img>
          }
        />
        <EventCard
          title='Litrivia'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'
          image={<img src={LitriviaImg} alt='Litrivia' id='eventCardImg'></img>}
        />
      </Typography>
    </React.Fragment>
  );
}

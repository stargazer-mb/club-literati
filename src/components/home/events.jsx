import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { Parallax, Background } from "react-parallax";

import tedxbg from "../../resources/imgs/parallax/bg1.jpg";
import munbg from "../../resources/imgs/parallax/bg2.jpg";
import litFestbg from "../../resources/imgs/parallax/bg3.jpg";

function Events() {
  return (
    <React.Fragment>
      <Parallax bgImage={tedxbg} strength={600} id='parallaxBg'>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            id='contentDiv'
            elevation={5}
            style={{
              maxWidth: "80%",
            }}
          >
            <Typography id='contentHead' variant='h6'>
              TEDxMLRIT Logo
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Editions and theme
            </Typography>
          </Paper>
        </div>
      </Parallax>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          paddingBlock: "1rem",
        }}
      >
        <Typography variant='h4'>| | |</Typography>
      </div>
      <Parallax bgImage={munbg} strength={600}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            id='contentDiv'
            elevation={5}
            style={{
              maxWidth: "80%",
            }}
          >
            <Typography id='contentHead' variant='h6'>
              MUN Logo
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Editions and theme
            </Typography>
          </Paper>
        </div>
      </Parallax>
      <Parallax bgImage={litFestbg} strength={600}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            id='contentDiv'
            elevation={5}
            style={{
              maxWidth: "80%",
            }}
          >
            <Typography id='contentHead' variant='h6'>
              Lit Fest Logo
            </Typography>
            <hr />
            <Typography id='contentBody' paragraph>
              Editions and theme
            </Typography>
          </Paper>
        </div>
      </Parallax>
    </React.Fragment>
  );
}

export default Events;

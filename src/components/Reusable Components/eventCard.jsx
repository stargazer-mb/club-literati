import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import {
  Hidden,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootMob: {
    width: "100%",
    marginBlock: "0.5rem",
    // border: "solid 1px blue",
    // borderRadius: "1rem",
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
    marginLeft: "0.75rem",
  },
  content: {
    marginLeft: "0.5rem",
  },
  rootPC: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  btn: {
    color: theme.palette.primary.litFest,
    marginLeft: "0.5rem",
  },
}));

export default function EventCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden smUp>
        <Grid item xs={12}>
          <div className={classes.rootMob}>
            <Accordion style={{ borderRadius: "2rem" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                {/* <PlayArrowIcon /> */}
                {/* <RadioButtonUncheckedIcon /> */}
                <RadioButtonCheckedIcon />
                <Typography className={classes.heading}>
                  {props.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={props.image}
                      alt='event'
                      style={{
                        marginBottom: "1rem",
                        maxWidth: "70vw",
                        maxHeight: "100%",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.content}>
                      {props.content}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button size='small' className={classes.btn}>
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid item md={4} lg={3}>
          <Card className={classes.rootPC}>
            <CardActionArea>
              <CardMedia className={classes.media} image={props.image} />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {props.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {props.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' className={classes.btn}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Hidden>
    </React.Fragment>
  );
}

import "./App.css";
import React, { useState } from "react";

import Home from "./components/home/index";
import TedX from "./components/tedx/index";
import LitFest from "./components/litFest/index";
import MUN from "./components/mun/index";
import MuderMyst from "./components/murderMyst/index";
import TeamLit from "./components/teamLit";
import ContactUs from "./components/contactUs";
import DeveloperInfo from "./components/developer";
import Registration from "./components/registrations";

import clblit from "../src/resources/imgs/clblit.png";
import news from "./resources/imgs/news.jpg";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import ListItemText from "@material-ui/core/ListItemText";
import { Paper, Grid } from "@material-ui/core";

import "./App.css";
import AnimatedText from "./components/animatedText";

const drawerWidth = 248;

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "black",
    backgroundColor: "white",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  registerBtn: {
    background: "linear-gradient(to right,purple,orange)",
    maxWidth: "90%",
    borderRadius: "1.5rem",
    marginLeft: "40px",
    height: "1.8rem",
    fontSize: "5px",
    "&:hover": {
      background: "linear-gradient(to left, #0A1931, #185ADB)",
    },
  },
  registerBtnText: {
    paddingRight: "10px",
    color: "white",
  },
}));

// alert("The Web application is designed for mobile handsets");

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [home, setHome] = useState(true);
  const [tedx, setTedx] = useState(false);
  const [mun, setMun] = useState(false);
  const [litFest, setLitFest] = useState(false);
  const [murderMyst, setMurderMyst] = useState(false);
  const [teamLit, setTeamLit] = useState(false);
  const [contact, setContact] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [register, setRegister] = useState(false);

  const handleHome = () => {
    setHome(true);
    setTedx(false);
    setMun(false);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(false);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleTedx = () => {
    setHome(false);
    setTedx(true);
    setMun(false);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(false);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleMun = () => {
    setHome(false);
    setTedx(false);
    setMun(true);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(false);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleLitFest = () => {
    setHome(false);
    setTedx(false);
    setMun(false);
    setLitFest(true);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(false);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleMurderMyst = () => {
    setHome(false);
    setTedx(false);
    setMun(false);
    setLitFest(false);
    setMurderMyst(true);
    setTeamLit(false);
    setContact(false);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleTeamLit = () => {
    setHome(false);
    setTedx(false);
    setMun(false);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(true);
    setContact(false);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleContact = () => {
    setHome(false);
    setTedx(false);
    setMun(false);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(true);
    setDeveloper(false);
    setRegister(false);
    setOpen(false);
  };

  const handleDeveloper = () => {
    setHome(false);
    setTedx(false);
    setMun(false);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(false);
    setDeveloper(true);
    setRegister(false);
    setOpen(false);
  };

  const handleRegister = () => {
    setHome(false);
    setTedx(false);
    setMun(false);
    setLitFest(false);
    setMurderMyst(false);
    setTeamLit(false);
    setContact(false);
    setDeveloper(false);
    setRegister(true);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='root'>
        {/* <CssBaseline /> */}
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={clblit}
              style={{
                height: "4rem",
                display: "flex",
                marginInline: "auto",
              }}
              alt='club-lit logo'
            />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={handleHome}>
              <HomeIcon style={{ paddingRight: "0.25rem" }} fontSize='medium' />
              <ListItemText primary={"Home"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={handleTedx}>
              <ListItemText primary={"TEDxMLRIT"} />
            </ListItem>
            <ListItem button onClick={handleMun}>
              <ListItemText primary={"Model United Nations"} />
            </ListItem>
            <ListItem button onClick={handleLitFest}>
              <ListItemText primary={"Literary Festival"} />
            </ListItem>
            <ListItem
              button
              onClick={handleRegister}
              className={classes.registerBtn}
            >
              <ListItemText
                primary={"Registrations Open!"}
                className={classes.registerBtnText}
              />
            </ListItem>
            <ListItem button onClick={handleMurderMyst}>
              <ListItemText primary={"Murder Mystery"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={handleTeamLit}>
              <GroupIcon
                style={{ paddingRight: "0.25rem" }}
                fontSize='medium'
              />
              <ListItemText primary={"Team Literati"} />
            </ListItem>
            <ListItem button onClick={handleContact}>
              <AlternateEmailIcon
                style={{ paddingRight: "0.25rem" }}
                fontSize='medium'
              />
              <ListItemText primary={"Contact / Follow Us"} />
            </ListItem>
            <ListItem button onClick={handleDeveloper}>
              <ChevronLeftIcon fontSize='small' />
              {/* <PersonIcon fontSize='small' /> */}
              <Typography variant='h6'>/</Typography>
              <ChevronRightIcon fontSize='small' />
              <ListItemText primary={"Developer Info"} />
            </ListItem>
            <Divider />
          </List>
          <img
            src={clblit}
            style={{ paddingBlock: "1rem" }}
            alt='clu-lit img'
          />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {home ? (
            <React.Fragment>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AnimatedText
                      txt='Club Literati'
                      colors={["#ee9ca7", "#ffdde1", "#2193b0", "#6dd5ed"]}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div id='newsImgDiv'>
                    <Paper elevation={5} onClick={handleRegister}>
                      {/* <a href='http://bit.ly/litfest2022' target='_blank'> */}
                      <img
                        src={news}
                        style={{ height: "auto", maxWidth: "100%" }}
                        alt='news'
                        title='Click to Register'
                      />
                    </Paper>
                  </div>
                </Grid>
              </Grid>
              <Home />
            </React.Fragment>
          ) : (
            ""
          )}
          {litFest ? <LitFest /> : ""}
          {mun ? <MUN /> : ""}
          {murderMyst ? <MuderMyst /> : ""}
          {tedx ? <TedX /> : ""}
          {teamLit ? <TeamLit /> : ""}
          {contact ? <ContactUs /> : ""}
          {developer ? <DeveloperInfo /> : ""}
          {register ? (
            <React.Fragment>
              <div onClick={handleHome}>Back</div>
              <Registration />
            </React.Fragment>
          ) : (
            ""
          )}
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;

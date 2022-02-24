import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Home from './components/home/index';
import TedX from './components/tedx/index';
import LitFest from './components/litFest/index';
import MUN from './components/mun/index';
import MuderMyst from './components/murderMyst/index';
import TeamLit from './components/teamLit';
import ContactUs from './components/contactUs';
import DeveloperInfo from './components/developer';
import Registration from './components/registrations';

import clblit from '../src/resources/imgs/clblit.png';
import news from './resources/imgs/news.jpg';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Paper, Grid, Button } from '@material-ui/core';

import './App.css';
import AnimatedText from './components/Reusable Components/animatedText';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    color: 'black',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
  registerBtn: {
    background: 'linear-gradient(to right,purple,orange)',
    maxWidth: '90%',
    borderRadius: '1.5rem',
    marginLeft: '40px',
    height: '1.8rem',
    fontSize: '5px',
    '&:hover': {
      background: 'linear-gradient(to left, #0A1931, #185ADB)',
    },
  },
  registerBtnText: {
    paddingRight: '10px',
    color: 'white',
  },
}));

function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
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
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={handleHome}>
          <HomeIcon style={{ paddingRight: '0.25rem' }} fontSize='medium' />
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleTedx}>
          <ListItemText primary={'TEDxMLRIT'} />
        </ListItem>
        <ListItem button onClick={handleMun}>
          <ListItemText primary={'Model United Nations'} />
        </ListItem>
        <ListItem button onClick={handleLitFest}>
          <ListItemText primary={'Literary Festival'} />
        </ListItem>
        <ListItem
          button
          onClick={handleRegister}
          className={classes.registerBtn}
        >
          <ListItemText
            primary={'Registrations Open!'}
            className={classes.registerBtnText}
          />
        </ListItem>
        <ListItem button onClick={handleMurderMyst}>
          <ListItemText primary={'Murder Mystery'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleTeamLit}>
          <GroupIcon style={{ paddingRight: '0.25rem' }} fontSize='medium' />
          <ListItemText primary={'Team Literati'} />
        </ListItem>
        <ListItem button onClick={handleContact}>
          <AlternateEmailIcon
            style={{ paddingRight: '0.25rem' }}
            fontSize='medium'
          />
          <ListItemText primary={'Contact / Follow Us'} />
        </ListItem>
        <ListItem button onClick={handleDeveloper}>
          <ChevronLeftIcon fontSize='small' />
          {/* <PersonIcon fontSize='small' /> */}
          <Typography variant='h6'>/</Typography>
          <ChevronRightIcon fontSize='small' />
          <ListItemText primary={'Developer Info'} />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='mainRoot'>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={clblit}
            style={{
              height: '4rem',
              display: 'flex',
              marginInline: 'auto',
            }}
            alt='club-lit logo'
            onClick={handleHome}
          />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
            <img
              src={clblit}
              style={{ paddingBlock: '1rem' }}
              alt='clu-lit img'
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
            <img
              src={clblit}
              style={{ paddingBlock: '1rem' }}
              alt='clu-lit img'
            />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {home ? (
          <div id='homeRoot'>
            <Grid container>
              <Grid item xs={12}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AnimatedText
                    txt='CLUB LITERATI'
                    variant='h1'
                    colors={['#ee9ca7', '#ffdde1', '#2193b0', '#6dd5ed']}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div id='newsImgDiv'>
                  <Paper elevation={5} onClick={handleRegister}>
                    {/* <a href='http://bit.ly/litfest2022' target='_blank'> */}
                    <img
                      src={news}
                      style={{ height: 'auto', maxWidth: '100%' }}
                      alt='news'
                      title='Click to Register'
                    />
                  </Paper>
                </div>
              </Grid>
            </Grid>
            <Home />
          </div>
        ) : (
          ''
        )}
        {litFest ? <LitFest /> : ''}
        {mun ? <MUN /> : ''}
        {murderMyst ? <MuderMyst /> : ''}
        {tedx ? <TedX /> : ''}
        {teamLit ? <TeamLit /> : ''}
        {contact ? <ContactUs /> : ''}
        {developer ? <DeveloperInfo /> : ''}
        {register ? (
          <React.Fragment>
            <Button
              onClick={handleHome}
              startIcon={<ChevronLeftIcon />}
              color='secondary'
            >
              Back
            </Button>
            <Registration />
          </React.Fragment>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar2 from '../components/NavBar2.js';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    backgroundColor: "skyblue",
    boxShadow: "none",
    // height: "3.9rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    textDecoration: "none",
    color: "white",
    fontFamily: 'Lato, sans-serif',
  },
  portal: {
    textDecoration: "none",
    fontFamily: 'Lato, sans-serif',
    color: 'white',
  },
  middle: {
    // marginRight: theme.spacing(1.5),
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <a href="https://lindyslocalpest.now.sh" className={classes.title}><h1 className={classes.title}>Lindys Local Pest</h1></a>
            </Typography>
            <Typography variant="h6" className={classes.middle}>
              <a href="https://www.salesrabbit.com/" className={classes.portal}><Button className={classes.portal}>Already a customer? Go to Lindys Local Pest Portal </Button></a>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <NavBar2/>
    </>
  );
}
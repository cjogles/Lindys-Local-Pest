import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "skyblue",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <h1>Lindy's Local Pest</h1>
          </Typography>
          <a href="mailto: marcuslindmeir718@gmail.com?subject=Interested in Lindys Local Pest Control&body=Hello Lindys Local Pest Control!%0D%0A %0D%0A I am interested in learning more about your services. %0D%0A %0D%0A Sincerely, %0D%0A %0D%0A <your name and contact information here>" style={{color: "white", textDecoration: "none"}}><Button color="inherit">Get In Contact</Button></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react';
import { AppBar, Toolbar, Grid, Button } from '@mui/material/';

const NavBar = () => {
  const btnStyle = {
    color: 'rgb(177,178,212)',
    marginLeft: '20px',
    fontSize: '18px',
  };

  return (
    <AppBar position='static' style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar disableGutters>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Button style={btnStyle}>About Me</Button>
          </Grid>
          <Grid item>
            <Button style={btnStyle}>Experience</Button>
          </Grid>
          <Grid item>
            <Button style={btnStyle}>Projects</Button>
          </Grid>
          <Grid item>
            <Button style={btnStyle}>Contact Me</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

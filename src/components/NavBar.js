import React, { useState } from 'react';
import { AppBar, Toolbar, Grid } from '@mui/material/';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const items = [
    { name: 'About me', id: 'introduction', duration: '500'},
    { name: 'Experience', id: 'experience', duration: '700'},
    { name: 'Projects', id: 'projects', duration: '800'},
    { name: 'Activities', id: 'activities', duration: '1000'},
  ];

  return (
    <AppBar position='static' style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar disableGutters>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={item.duration}
                onMouseEnter={() => setHoveredLink(item.id)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  color: hoveredLink === item.id ? 'white' : 'rgb(177,178,212)',
                  marginLeft: '20px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  fontFamily: 'Ubuntu, sans-serif',
                }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

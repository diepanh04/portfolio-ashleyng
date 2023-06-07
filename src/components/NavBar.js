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
    <>
      <AppBar position='static' style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar disableGutters>
          <Grid container spacing={3}>
            <Grid item style={{ marginLeft: 1000, marginTop: 20 }}>
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
                    color: hoveredLink === item.id ? 'white' : '#C3C6E8',
                    marginLeft: '20px',
                    fontSize: '20px',
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
      <hr style={{ width: '30%', textAlign: 'right', marginRight: '0', borderColor: 'rgb(68,69,97,0.3)' }} />
    </>
  );
};

export default NavBar;

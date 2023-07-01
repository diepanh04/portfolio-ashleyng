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
          <Grid container spacing={3} sx={{ justifyContent: 'right', marginRight: '20px' }}>
            <Grid item style={{ marginTop: 20 }}>
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
                    color: hoveredLink === item.id ? '#F56D91' : 'rgb(74,87,89,0.75)',
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
      <hr style={{ width: '30%', textAlign: 'right', marginRight: '0', borderColor: 'rgb(74,87,89,0.3)' }} />
    </>
  );
};

export default NavBar;

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const NavBar = ({children}) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const items = [
    { name: 'Home', id: 'portfolio-ashleyng' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Activities', id: 'activities' },
  ];

  return (
    <div style={{ padding: '10px' }}>
      <Grid container spacing={3} sx={{ justifyContent: 'right', marginRight: '20px' }}>
        <Grid item style={{ marginTop: 20, marginRight: '20px' }}>
          {items.map((item) => (
            <Typography
              component={Link}
              to={item.id}
              onMouseEnter={() => setHoveredLink(item.id)}
              onMouseLeave={() => setHoveredLink(null)}
              sx={{
                color: '#8D8DAA',
                fontWeight: 'bold',
                fontSize: '18px',
                fontFamily: 'Ubuntu, sans-serif',
                textDecoration: 'none',
                marginRight: '20px',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: hoveredLink === item.id ? 'rgb(0,0,0,0.1)' : ''
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Grid>
      </Grid>
      {children}
    </div>
  );
};

export default NavBar;

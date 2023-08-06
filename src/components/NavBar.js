import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
              sx={{
                color: '#8D8DAA',
                fontWeight: 'bold',
                fontSize: '18px',
                fontFamily: 'Ubuntu, sans-serif',
                textDecoration: 'none',
                marginRight: '20px'
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

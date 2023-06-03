import React from 'react';
import { motion } from "framer-motion"
import { Typography, Grid } from '@mui/material/';
import myphoto from '../assets/images/personal.png';

const AboutMeCard = () => {

  return (
    <Grid container textAlign='center'>
      <Grid item xs={12}>
        <img
          src={myphoto}
          style={{
            width: '30%',
            border: 'solid white 2px',
            borderRadius: '80px',
            marginBottom: '10px'
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            color: 'rgb(68,69,97)',
            fontSize: '20px'
          }}
        >
          Hello, world! My name is
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'rgb(68,69,97)',
            fontSize: '60px'
          }}
        >
          Ashley Nguyen
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMeCard;

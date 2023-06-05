import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box } from '@mui/material/';
import myphoto from '../assets/images/personal.png';

const AboutMeCard = () => {
  const [hovered, setHovered] = useState(false);
  const imageAnimation = {
    offscreen: { x: 0 },
    onscreen: {
      x: 0,
      rotate: [-180, 0, 180, 0],
      transition: {
        type: 'spring',
        bounce: 0.25,
        duration: 2,
      },
    },
  };

  const textAnimation = {
    offscreen: { y: 200 },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 2,
      },
    },
  };

  return (
    <Grid container textAlign='center'>
      <Grid item xs={12}>
        <motion.div
          initial={'offscreen'}
          animate={'onscreen'}
          variants={imageAnimation}
        >
          <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              position: 'relative',
              width: '30%',
              margin: '0 auto',
              borderRadius: '80px',
              marginBottom: '20px',
            }}
          >
            <img
              src={myphoto}
              style={{
                width: '100%',
                borderRadius: '80px',
              }} 
            />
            {!hovered &&
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgb(68,69,97,0.25)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '80px',
                }}
              />         
            }
          </Box>
        </motion.div>
      </Grid>
      <Grid item xs={12}>
        <motion.div initial={'offscreen'} animate={'onscreen'} variants={textAnimation}>
          <Typography
            sx={{
              color: 'rgb(68,69,97)',
              fontSize: '20px',
              fontFamily: 'Ubuntu, sans-serif',
              marginBottom: '-20px'
            }}
            className="gradiant-color"
          >
            Hello, world! My name is
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: 'rgb(68,69,97)',
              fontSize: '75px',
              fontFamily: 'Ubuntu, sans-serif',
              marginBottom: '-15px'
            }}
            className="gradiant-color"
          >
            Ashley Nguyen
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: 'rgb(68,69,97,0.75)',
              fontSize: '30px',
              fontFamily: 'Ubuntu, sans-serif',
            }}
            className="gradiant-color"
          >
            aspiring software engineer
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default AboutMeCard;

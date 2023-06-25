import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box, Button, Stack } from '@mui/material/';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import myphoto from '../assets/images/personal.png';
import leaf from '../assets/images/leaf5.png';
import leaf2 from '../assets/images/leaf4.png';

const Banner = () => {
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
    <motion.div initial={'offscreen'} animate={'onscreen'} variants={textAnimation} style={{ marginLeft: '15vh' }}>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <div>
          <Typography
          sx={{
            fontWeight: 'bold',
            color: 'rgb(68,69,97)',
            fontSize: '75px',
            fontFamily: 'Ubuntu, sans-serif',

          }}
        >
          Hi! I'm Ashley
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'rgb(68,69,97,0.75)',
            fontSize: '45px',
            fontFamily: 'Ubuntu, sans-serif',
            marginTop: '-25px'
          }}
        >
          A Software Engineer
        </Typography>
        </div>
        <img
          src={leaf2}
          style={{
            width: '12%',
            marginLeft: '-2vh',
            marginTop: '-10vh'
          }}
        />
      </div>
      <Typography
        sx={{
          fontWeight: 'bold',
          color: 'rgb(199,222,234,0.8)',
          fontSize: '20px',
          fontFamily: 'Ubuntu, sans-serif',
        }}
      >
        i'm passionate about clean codes that make positive impacts.
      </Typography>
      <Typography
        sx={{
          fontWeight: 'bold',
          color: 'rgb(199,222,234,0.8)',
          fontSize: '20px',
          fontFamily: 'Ubuntu, sans-serif',
        }}
      >
        and looking for opportunities to grow and make connections.
      </Typography>
      <div style={{ alignItems: 'center', display: 'flex', marginTop: '1vh' }}>
        <Button
            variant="outlined"
            endIcon={
              <FileDownloadOutlinedIcon />
            }
            sx={{
              borderColor: 'rgb(199,222,234,0.8)',
              color: 'rgb(199,222,234,0.8)'
            }}
            href="https://drive.google.com/file/d/1CBeBRo9s_Uvg6otuqN4PQfA39x7nWC-r/view?usp=sharing"
            target="_blank"
          >
            My Resume
        </Button>
        {/* <img
          src={leaf}
          style={{
            width: '30vh'
          }}
        /> */}
        <hr style={{ width: '40%', marginLeft: '2vh', marginTop: '10px', borderColor: 'rgb(199,222,234,0.8)' }} />
      </div>
    </motion.div>
  );
};

export default Banner;

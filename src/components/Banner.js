import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Box } from '@mui/material/';
import { Link } from 'react-router-dom';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
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
    <motion.div initial={'offscreen'} animate={'onscreen'} variants={textAnimation}>
      <div style={{   }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: '#626277',
            fontSize: '75px',
            fontFamily: 'Ubuntu, sans-serif',
          }}
        >
          Hi! I'm Ashley
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'rgb(245,109,145)',
            fontSize: '45px',
            fontFamily: 'Ubuntu, sans-serif',
            marginTop: '-25px'
          }}
        >
          A Software Engineer
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'rgb(74,87,89,0.5)',
            fontSize: '20px',
            fontFamily: 'Ubuntu, sans-serif',
          }}
        >
          i'm passionate about clean codes that make positive impacts,
        </Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'rgb(74,87,89,0.5)',
            fontSize: '20px',
            fontFamily: 'Ubuntu, sans-serif',
          }}
        >
          and looking for opportunities to grow and make connections.
        </Typography>
      </div>
      <div style={{ position: 'absolute', marginTop: '1%' }}>
        <div style={{ position: 'relative', zIndex: 2, border: '2px solid #8D8DAA', padding: '10%', width: '100%' }}>
          <Typography
            href='https://drive.google.com/file/d/1CBeBRo9s_Uvg6otuqN4PQfA39x7nWC-r/view?usp=sharing'
            sx={{
              color: '#F7F5F2',
              fontWeight: 'bold',
              fontSize: '18px',
              fontFamily: 'Ubuntu, sans-serif',
              textDecoration: 'none'
            }}
          >
            My Resume
          </Typography>
        </div>
        <Box sx={{ backgroundColor: '#F56D91', position: 'absolute', zIndex: 1, top: 5, left: 5, width: '125%', height: '100%' }} />
      </div>
    </motion.div>
  );
};

export default Banner;

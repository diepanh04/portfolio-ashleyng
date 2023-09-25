import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Button, Container } from '@mui/material/';

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
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
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
            marginTop: '-25px',
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
          I'm passionate about clean codes that make positive impacts,
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
        <Box
          style={{
            position: 'relative',
            marginTop: '1%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              border: '2px solid #8D8DAA',
              padding: '10%',
              width: '100%',
              left: 5
            }}
          >
            <a
              href='https://drive.google.com/file/d/1JQztp2crbAK3yVI76wzNzIiUy3YrFn1D/view?usp=sharing'
              target="_blank"
              style={{
                color: '#F7F5F2',
                fontWeight: 'bold',
                fontSize: '18px',
                fontFamily: 'Ubuntu, sans-serif',
                textDecoration: 'none',
              }}
            >
              My Resume
            </a>
          </div>
          <Box
            sx={{
              backgroundColor: '#F56D91',
              position: 'absolute',
              zIndex: 1,
              top: 5,
              left: 1,
              width: '125%',
              height: '100%'
            }}
          />
        </Box>
      </Container>
    </motion.div>
  );
};

export default Banner;

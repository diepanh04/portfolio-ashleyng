import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box, Button, Stack } from '@mui/material/';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import myphoto from '../assets/images/personal.png';

const Banner = () => {
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
    <Grid
      container
      sx={{
        marginLeft: '10%'
      }}    
    >
      <Grid item sx={{ position: 'relative', zIndex: '2' }}>
        <motion.div initial={'offscreen'} animate={'onscreen'} variants={textAnimation}>
          <Typography
            sx={{
              color: 'rgb(68,69,97)',
              fontSize: '20px',
              fontFamily: 'Ubuntu, sans-serif',
              marginBottom: '-20px',
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

            }}
            className="gradiant-color"
          >
            Ashley Nguyen
          </Typography>
          <Box
            sx={{
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: '15px',
              backgroundColor: 'rgb(195,198,232,0.5)',
              padding: '10px',
              borderRadius: '10px'
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                color: 'rgb(68,69,97,0.75)',
                fontSize: '20px',
                fontFamily: 'Ubuntu, sans-serif',
                width: '100%'
              }}
            >
              I am an aspiring software engineer who is passionate about clean codes that make positive impacts. I am also
              a self-motivated learner, a gym aholic, and a food lover.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              endIcon={
                <FileDownloadOutlinedIcon />
              }
              sx={{
                borderColor: 'rgb(68,69,97)',
                color: 'rgb(68,69,97)'
              }}
              href="https://drive.google.com/file/d/1CBeBRo9s_Uvg6otuqN4PQfA39x7nWC-r/view?usp=sharing"
              target="_blank"
            >
              My Resume
            </Button>
          </Stack>
        </motion.div>
      </Grid>
      <Grid
        item
        sx={{
          position: 'absolute',
          top: '4%',
          left: '45%',
          zIndex: '1'
        }}
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
              width: '400px',
              borderRadius: '30px',
            }}
          />
          {!hovered && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '400px',
                height: '100%',
                backgroundColor: 'rgb(68,69,97,0.25)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '30px',
              }}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;

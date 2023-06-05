import React, { useState } from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ModeIcon from '@mui/icons-material/Mode';
import SchoolIcon from '@mui/icons-material/School';
import Face2Icon from '@mui/icons-material/Face2';
import myPhoto from '../assets/images/personal-2.jpeg';

const Introduction = () => {
  const [hovered, setHovered] = useState(false);
  const introduction = {
    padding: '30px',
  }
  const infoRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }
  const info = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(68,69,97)',
    fontFamily: 'Ubuntu, sans-serif',
  }
  const paragraph = {
    fontSize: '18px',
    color: 'rgb(54,55,78)',
    width: '80%',
    fontFamily: 'Ubuntu, sans-serif'
  }
  const heading = {
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  }
  const textAnimation = {
    offscreen: {y: 100},
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2
      }
    }
  }
  const animation = {
    offscreen: {x: 100, opacity: 0},
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2
      }
    }
  }
  
  return (
    <motion.div
      id="introduction"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={animation}  
    >
      <div style={heading}>
        <motion.div
          whileHover={{ rotate: 180 }}
        >
          <Face2Icon sx={{ fontSize: '40px', color: 'rgb(68,69,97)' }}/>
        </motion.div>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'rgb(68,69,97)',
              fontFamily: 'Ubuntu, sans-serif'
            }}
          >
            About Me
          </Typography>
      </div>
      <Grid container style={introduction}>
        <Grid item xs={4}>
          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ y: hovered ? -20 : 0 }}
          >
            <img
              src={myPhoto}
              style={{
                width: '80%',
                borderRadius: '30px',
                marginBottom: '20px',
                boxShadow: '10px 10px rgb(188,189,208)'
              }}
            />
          </motion.div>
          <div style={infoRow}>
            <AutoStoriesIcon sx={{ color: 'rgb(68,69,97)' }}/>
            <Typography style={info}>Miami University</Typography>
          </div>
          <div style={infoRow}>
            <ModeIcon sx={{ color: 'rgb(68,69,97)' }}/>
            <Typography style={info}>Computer Science Major</Typography>
          </div>
          <div style={infoRow}>
            <SchoolIcon sx={{ color: 'rgb(68,69,97)' }}/>
            <Typography style={info}>May 2024</Typography>
          </div>
        </Grid>
        <Grid item xs={8}>
          <motion.div 
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={textAnimation}
          >
            <Typography style={paragraph}>
              Hi, my name is <span style={{ opacity: '0.8', fontWeight: 'bold' }}>Ashley Nguyen</span>.
              I am an aspiring software engineer who is passionate about clean codes that make positive impacts.
              I hold great values in user experience and orient my work with a customer centric mindset. 
            </Typography>
            <br />
            <Typography style={paragraph}> 
              I believe that meaningful human connections and mentorship play important roles in one’s development.
              I am eager to connect with like-minded individuals who wish to give and to receive.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Introduction;
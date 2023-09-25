import React from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import dialog from '../assets/images/dialog.png';
import myPhoto from '../assets/images/personal-2.jpeg';
import decor from '../assets/images/6.png';
import { Link } from 'react-router-dom';

const About = () => {
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
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={animation}  
    >
      <Grid container sx={{ display: 'flex', alignsItem: 'center' }}>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontSize: '30px',
              fontFamily: 'Ubuntu, sans-serif',
              color: '#626277',
              fontWeight: 'bold'
            }}
          >
            1. About Me
          </Typography>
          <hr
            style={{
              width: '15vh',
              height: '8px',
              textAlign: 'left',
              marginLeft: '0',
              marginTop: '10px',
              marginBottom: '20px',
              backgroundColor: '#F56D91',
              border: 'none'
            }}
          />
          <Typography
            sx={{
              width: '80%',
              fontFamily: 'Ubuntu, sans-serif',
              color: 'rgb(74,87,89,0.75)',
              fontSize: '18px'
            }}
          >
            I am a Computer Science Senior at Miami University with a focus on web and software development.
            I am open to opportunities in software engineering and product management.
          </Typography>
          <br />
          <Typography
            sx={{
              width: '80%',
              fontFamily: 'Ubuntu, sans-serif',
              color: 'rgb(74,87,89,0.75)',
              fontSize: '18px'
            }}
          >
            I am driven by technologies that support business growth and human development.
            With my expertise in web application and Saas software, I bring to the table
            the technical competence and passionate longing for knowledge that will foster your business in the long run.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ position: 'relative' }}>
          <img
            src={decor}
            style={{
              width: '100%',
              borderRadius: '5vh',
            }}
          />
          <div style={{ position: 'absolute', left: '25%', top: '45%' }}>
            <div style={{ position: 'relative', zIndex: 2, border: '2px solid #8D8DAA', padding: '10%', width: '100%' }}>
              <Typography
                component={Link}
                to={`/about`}
                sx={{
                  color: '#F7F5F2',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  textDecoration: 'none'
                }}
              >
                More About Me
              </Typography>
            </div>
            <Box sx={{ backgroundColor: '#F56D91', position: 'absolute', zIndex: 1, top: 5, left: 5, width: '125%', height: '100%' }} />
          </div>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default About
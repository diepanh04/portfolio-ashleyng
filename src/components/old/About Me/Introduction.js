import React, { useState } from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ModeIcon from '@mui/icons-material/Mode';
import SchoolIcon from '@mui/icons-material/School';
import Face2Icon from '@mui/icons-material/Face2';
import myPhoto from '../../assets/images/personal-2.jpeg';
import TechStack from './TechStack';

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
    color: '#707088',
    fontFamily: 'Ubuntu, sans-serif',
  }
  const paragraph = {
    fontSize: '18px',
    color: '#707088',
    width: '100%',
    fontWeight: 'bold',
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
          <Face2Icon sx={{ fontSize: '40px', color: '#707088' }}/>
        </motion.div>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#707088',
              fontFamily: 'Ubuntu, sans-serif'
            }}
          >
            About Me
          </Typography>
          <hr style={{ width: '30%', textAlign: 'left', marginLeft: '0', marginTop: '10px', borderColor: 'rgb(112,112,136,0.75)' }} />
      </div>
      <Grid container style={introduction}>
        <Grid item container>
          <Grid item xs={4}>
            <motion.div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={myPhoto}
                style={{
                  width: '80%',
                  borderRadius: '30px',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={8}>
            <motion.div 
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true }}
              variants={textAnimation}
            >
              <Typography style={paragraph}>
                Hi, my name is <span style={{ color: '#F56D91', fontWeight: 'bold' }}>Ashley Nguyen</span>.
                As I embark on my professional growth journey, I am constantly seeking opportunities to apply my skills, acquire new knowledge, establish valuable connections, and explore my true potential.
                The presence of influential individuals in my life, including my family, friends, and colleagues, serves as a mirror reflecting my personal growth. I am enthusiastic about expanding my network
                further by connecting with like-minded individuals who are eager to both give and receive. So let's chat!
              </Typography>
              <br />
              <Typography style={paragraph}> 
              Feel free to explore my website, where I aim to showcase my past experiences and projects. As I continue to evolve, this website will serve as a personal diary, documenting my progress and providing a means for my own reflection.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: '30px' }}>
          <Grid item={4}>
            <div style={infoRow}>
              <AutoStoriesIcon sx={{ color: '#707088' }}/>
              <Typography style={info}>Miami University</Typography>
            </div>
            <div style={infoRow}>
              <ModeIcon sx={{ color: '#707088' }}/>
              <Typography style={info}>Computer Science Major</Typography>
            </div>
            {/* <div style={infoRow}>
              <SchoolIcon sx={{ color: 'rgb(68,69,97)' }}/>
              <Typography style={info}>May 2024</Typography>
            </div> */}
          </Grid>
          <Grid item xs={8} sx={{ marginLeft: '100px' }}>
            <TechStack />
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Introduction;
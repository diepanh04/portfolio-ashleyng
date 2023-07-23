import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ProjectContainer from './Projects/ProjectContainer';
import MyButton from './MyButton';
import podcasity1 from '../assets/images/podcasity_demo1.png';
import goodwatch1 from '../assets/images/goodwatch_demo1.png';

const Projects = () => {
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
      id="projects"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={animation}  
    >
      <Grid>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: '50px',
              fontFamily: 'Ubuntu, sans-serif',
              color: '#626277',
            }}
          >
            What I built
          </Typography>
          <hr
            style={{
              width: '15vh',
              height: '8PX',
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
              fontFamily: 'Ubuntu, sans-serif',
              color: 'rgb(74,87,89,0.75)',
              fontSize: '18px'
            }}
          >
            Take a look at some of my work with which I practice to become a software engineer. Practice makes perfect, and I am bound to continue learning
            and growing my skills with more to come!
          </Typography>
        </Grid>
        <div
          style={{
            position: 'relative',
            marginTop: '30px'
          }}
        >
          <img
            src={podcasity1}
            style={{
              width: '50%',
              position: 'relative',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              top: '15%',
              left: '45%',
              textAlign: 'right',
              width: '50%'
            }}
          >
            <Typography
              sx={{
                fontSize: '45px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#626277',
              }}
            >
              Podcasity
            </Typography>
            <Box
              sx={{
                backgroundColor: '#F7F5F2',
                padding: '2vh',
                marginTop: '15px',
                marginBottom: '25px'
              }}
            >
              <Typography
                sx={{
                  color: '#626277'
                }}
              >
                Inspired by GoodWatch and GoodRead and realizing a lack of such a community for the podcast market,
                I have been building a web application for podcast lovers to come together and share their reviews.
              </Typography>
            </Box>
            {['Javascript', 'ReactJS', 'Express', 'PostgreSQL', 'Prisma', 'Firebase'].map((item) => (
              <Chip
                label={item}
                sx={{
                  color: 'rgb(74,87,89)',
                  marginRight: '5px',
                  marginBottom: '25px'
                }}
              >
              </Chip>
            ))}
          </div>
          <div style={{ position: 'absolute', left: '83%', top: '78%' }}>
            <div style={{ position: 'relative', zIndex: 2, border: '2px solid #8D8DAA', padding: '10%', width: '100%' }}>
              <Typography
                component={Link}
                to={`/projects/podcasity}`}
                sx={{
                  color: '#F7F5F2',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  textDecoration: 'none'
                }}
              >
                View Details
              </Typography>
            </div>
            <Box sx={{ backgroundColor: '#F56D91', position: 'absolute', zIndex: 1, top: 5, left: 5, width: '125%', height: '100%' }} />
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            marginTop: '30px',
            marginBottom: '100px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: 1,
              top: '15%',
              textAlign: 'left',
              width: '50%'
            }}
          >
            <Typography
              sx={{
                fontSize: '45px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#626277',
              }}
            >
              GoodWatch
            </Typography>
            <Box
              sx={{
                backgroundColor: '#F7F5F2',
                padding: '2vh',
                marginTop: '15px',
                marginBottom: '25px',
              }}
            >
              <Typography
                sx={{
                  color: '#626277'
                }}
              >
                A web application inspired by GoodRead that allows users to save movies to WatchList.
                The website categorizes and shows movie information with other features such as user log-in and movie rating.
              </Typography>
            </Box>
            {['HTML', 'CSS', 'Bootstrap', 'Javascript', 'API', 'Firebase'].map((item) => (
              <Chip
                label={item}
                sx={{
                  color: 'rgb(74,87,89)',
                  marginRight: '5px'
                }}
              >
              </Chip>
            ))}
          </div>
          <div style={{ position: 'absolute', left: '0%', top: '78%' }}>
            <div style={{ position: 'relative', zIndex: 2, border: '2px solid #8D8DAA', padding: '10%', width: '100%' }}>
              <Typography
                component={Link}
                to={`/projects/goodwatch}`}
                sx={{
                  color: '#F7F5F2',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  textDecoration: 'none'
                }}
              >
                View Details
              </Typography>
            </div>
            <Box sx={{ backgroundColor: '#F56D91', position: 'absolute', zIndex: 1, top: 5, left: 5, width: '125%', height: '100%' }} />
          </div>
          <img
            src={goodwatch1}
            style={{
              width: '50%',
              position: 'relative',
              zIndex: 0,
              left: '45%'
            }}
          />
        </div>
        <ProjectContainer />
      </Grid>
    </motion.div>
  )
}

export default Projects
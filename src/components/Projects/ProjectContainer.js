import React from 'react';
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { Grid, Typography, Chip } from '@mui/material';
import demoPhoto from  '../../assets/images/goodwatch.png';
import DashboardIcon from '@mui/icons-material/Dashboard';

const projects = [
  {
    title: 'Podcasity',
    image: demoPhoto,
    skills: ['Javascript', 'ReactJS', 'NodeJS', 'Express', 'PostgreSQL', 'Firebase'],
    description: 'A work in progress: An online platform for podcast lovers to come together and share their favourite podcasts. The website includes features such as podcast recommendations, favourite list, episode notes, ...'
  },
  { 
    title: 'Stocks Searching Tool',
    image: demoPhoto,
    skills: ['HTML', 'CSS', 'Javascript', 'JQuery', 'AJAX', 'API'],
    description: 'A web application that displays stock information combining 5 Polygon API endpoints given user input. The program saves all search history to OpenStack and display it by date using SQL.'
  },
  { 
    title: 'Facebook Mockup',
    image: demoPhoto,
    skills: ['Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    description: 'A web application inspired by GoodRead that allows users to save movies to WatchList. The website categorizes and shows movie information with other features such as user log-in and movie rating.',
  },
  { 
    title: 'GoodWatch',
    image: demoPhoto,
    skills: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'API', 'Firebase'],
    description: 'A social media web application simulating Facebook. Implemented sign-up, sign-in, post, comment, and like features for multiple user interactions.',
  },
  { 
    title: 'Flight Booker',
    image: demoPhoto,
    skills: ['Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    description: 'A flight-booking online service application that contains 5000+ flights information. Integrated Sendgrid email service to send confirmation email to users for each booking.',
  },
];

const ProjectContainer = () => {
  const heading = {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '3%',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
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
      id="projects"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={animation}  
    >
      <div style={heading}>
        <motion.div
          whileHover={{ rotate: 180 }}
        >
          <DashboardIcon sx={{ fontSize: '40px', color: 'rgb(68,69,97)' }}/>
        </motion.div>
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'rgb(63,63,98)',
            fontFamily: 'Ubuntu, sans-serif'
          }}
        >
          My Projects
        </Typography>
        <hr style={{ width: '30%', textAlign: 'left', marginLeft: '0', marginTop: '10px', borderColor: 'rgb(68,69,97,0.5)' }} />
      </div>
      <Grid container spacing={3} >
        {projects.map((project, index) => (
          <Grid item xs={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default ProjectContainer;

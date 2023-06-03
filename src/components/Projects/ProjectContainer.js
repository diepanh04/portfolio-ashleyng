import React from 'react';
import { motion } from "framer-motion";
import ProjectCard from './ProjectCard';
import { Grid, Typography, Chip } from '@mui/material';
import demoPhoto from  '../../assets/images/goodwatch.png';
import DashboardIcon from '@mui/icons-material/Dashboard';

const projects = [
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

  return (
    <>
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
            color: 'rgb(63,63,98)'
          }}
        >
          My Projects
        </Typography>
      </div>
      <Grid container spacing={3} >
        {projects.map((project, index) => (
          <Grid item xs={4} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectContainer;
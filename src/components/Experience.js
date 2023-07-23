import React from 'react';
import { motion } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ExperienceItem from './ExperienceItem';
import MyButton from './MyButton';
import { Link } from 'react-router-dom';
import rakPhoto01 from '../assets/images/rakuna-1.jpeg';
import rakPhoto02 from '../assets/images/rakuna-2.JPG';
import rakPhoto03 from '../assets/images/rakuna-3.JPG';
import fptLogo from '../assets/images/Logo-FPT.jpg';
import miami from '../assets/images/miami.png';
import decor1 from '../assets/images/7.png';
import decor2 from '../assets/images/4.png';
import demo1 from '../assets/images/rakuna_demo1.png';
import demo2 from '../assets/images/rakuna_demo2.png';

const experience = [
  {
    time: 'June 2023 - August 2023',
    title: 'Software Engineer Intern @',
    company: 'FPT Software',
    link: 'https://fptsoftware.com/',
    skills: ['Full-time', 'Internship', 'Web Development'],
    description: 'Incoming Intern',
    bullets: [],
    images: [fptLogo],
  },
  {
    time: 'January 2023 - May 2023',
    title: 'Junior Software Engineer @',
    company: 'Rakuna Inc',
    link: 'https://www.rakuna.co/',
    skills: ['Part-time', 'Web Development'],
    description: 'I moved on to work part-time with more focus on back-end development and services. I was able to contribute to 3 production release, completing 95% assigned tickets.',
    bullets: ['Optimized Interview Scheduling mailer system by re-engineering the MVC models and Sidekiq’s enqueued jobs that send API requests to the server, serving 300+ organizations including Sensata Technologies, NXP, Entergy, … ',
              'Executed in-time solutions to address end users’ issues by accessing and configuring AWS production databases to update event credits and authenticate users, meeting 80% SLA in customer success'],
    images: [rakPhoto03],
  },
  {
    time: 'May 2022 - December 2022',
    title: 'Software Engineer Intern @',
    company: 'Rakuna Inc',
    link: 'https://www.rakuna.co/',
    skills: ['Internship', 'Full-time', 'Web Development'],
    description: 'This internship at Rakuna as a software engineer marked my very first step into real-world engineering. I worked cross-functionally with the product team to deliver user stories with an Agile developmennt workflow.',
    bullets: ['Revamped CRM Recruiting form validation schema using Formik, Yup and ReactJS to improve form usability via relevant error messages',
              'Designed and implemented a scalable microservice using Ruby on Rails, PostgreSQL, ReactJS, and Javascript that duplicated existing Email Campaigns to facilitate faster creation of post-event emails',
              'Performed unit and integration testing with Rspec and FactoryBot while utilizing Docker and Vault for storing secured, encrypted candidate information'],
    images: [rakPhoto01, rakPhoto02]
  },
  {
    time: 'August 2022 - May Present',
    title: 'Data Integration Intern @',
    company: 'Miami University',
    link: 'https://miamioh.edu/',
    skills: ['Part-time','Internship', 'Data Visualization', 'Big Data'],
    description: 'With this on-campus internship, I was able to learn iPaaS to automate or optimize some IT-related processes within the campus, requiring low-code but highly logical thinking and understanding of contexts.',
    bullets: ['Automated the notification system using iPaaS to target stakeholders and streamlined the process for classroom inspection purposes, reducing 80% response time to IT issues',
              'Enhanced Performance Scorecard by adding 15+ filter dimensions and created a Priority Rubrik leveraging Tableau, doubling 35,000+ IT issue identificationn rates and reducing solution time by 70%'],
  images: [miami]
  },
]

const Experience = () => {
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
      <Grid container spacing={3}>
        <Grid item xs={7} sx={{ position: 'relative', alignItems: 'center' }}>
          <div style={{ zIndex: '1' }}> 
            <Typography
              sx={{
                fontSize: '50px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#626277',
              }}
            >
              Where I worked
            </Typography>
            <hr
              style={{
                width: '15vh',
                height: '8PX',
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
                fontSize: '18px',
              }}
            >
              I view internships as a chance to improve my skills, expand my network, and contribute to business growth.
              I strive to solve real business problems and make positive changes during every experience, with the goal of making a meaningful impact and helping the organization succeed.
            </Typography>
          </div>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {experience.map((exp) => (
              <ExperienceItem
                experienceInfo={exp}
              />
            ))}
          </Timeline>
        </Grid>
        <Grid item xs={5} sx={{ position: 'relative', alignItems: 'center' }}>
          <img src={decor2} style={{ width: '80%', position: 'absolute', zIndex: '0', left: 0, top: '15%' }} />
          <img src={demo1} style={{ width: '80%', position: 'absolute', zIndex: '2', left: '20%', top: '25%' }} />
          <img src={demo2} style={{ width: '80%', position: 'absolute', zIndex: '3', left: 0, top: '40%' }} />
          <img src={decor2} style={{ width: '80%', position: 'absolute', zIndex: '1', left: '35%', top: '32%' }} />
          <div style={{ position: 'absolute', left: '40%', top: '85%' }}>
            <div style={{ position: 'relative', zIndex: 2, border: '2px solid #8D8DAA', padding: '10%', width: '100%' }}>
              <Typography
                component={Link}
                to={`/experience`}
                sx={{
                  color: '#F7F5F2',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  textDecoration: 'none'
                }}
              >
                See My Progress
              </Typography>
            </div>
            <Box sx={{ backgroundColor: '#F56D91', position: 'absolute', zIndex: 1, top: 5, left: 5, width: '125%', height: '100%' }} />
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Experience;
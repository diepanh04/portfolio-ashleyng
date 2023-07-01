import React, { useState } from 'react';
import { motion } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Typography } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import Grid from '@mui/material/Grid';
import ExperienceItem from './ExperienceItem';
import ExperienceDialog from './ExperienceDialog';
import rakPhoto01 from '../../assets/images/rakuna-1.jpeg';
import rakPhoto02 from '../../assets/images/rakuna-2.JPG';
import rakPhoto03 from '../../assets/images/rakuna-3.JPG';
import fptLogo from '../../assets/images/Logo-FPT.jpg';
import miami from '../../assets/images/miami.png';

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
  const [selectedItem, setSelectedItem] = useState(null);
  const heading = {
    fontWeight: 'bold',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  }
  const showDescription = (experience) => {
    setSelectedItem(experience);
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
      id="experience"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true }}
      variants={animation}  
    >
      <div style={heading}>
        <motion.div
          whileHover={{ rotate: 180 }}
        >
          <LaptopIcon sx={{ fontSize: '40px', color: '#707088' }}/>
        </motion.div>
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#707088',
            fontFamily: 'Ubuntu, sans-serif'
          }}
        >
          My Experience
        </Typography>
        <hr style={{ width: '30%', textAlign: 'left', marginLeft: '0', marginTop: '10px', borderColor: 'rgb(112,112,136,0.75)' }} />
      </div>
      <Grid container>
        <Grid item xs={6}>
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
                selectedItem={selectedItem}
                handleClick={(exp) => showDescription(exp)}
              />
            ))}
          </Timeline>
        </Grid>
        {(selectedItem !== null) &&  
          <Grid item xs={6}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                }
              }}
              style={{
                backgroundColor: selectedItem !== null ? '#F7F5F2' : 'none',
                padding: '30px',
                borderRadius: '20px'
              }}
            > 
              <ExperienceDialog experience={selectedItem} />
            </motion.div>
          </Grid>        
        }
      </Grid>
    </motion.div>
  );
}

export default Experience;
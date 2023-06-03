import React, { useState } from 'react';
import { motion } from "framer-motion";
import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Typography } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import Grid from '@mui/material/Grid';
import ExperienceItem from './ExperienceItem';
import ExperienceDialog from './ExperienceDialog';

const experience = [
  {
    time: 'June 2023 - August 2023',
    title: 'Software Engineer Intern @',
    company: 'FPT Software',
    link: 'https://fptsoftware.com/',
    skills: ['Full-time', 'Internship', 'Web Development'],
    description: 'This is my internship description',
    bullets: [],
  },
  {
    time: 'January 2023 - May 2023',
    title: 'Junior Software Engineer @',
    company: 'Rakuna Inc',
    link: 'https://www.rakuna.co/',
    skills: ['Part-time', 'Web Development'],
    description: 'This is my internship description',
    bullets: ['Optimized Interview Scheduling mailer system by re-engineering the MVC models and Sidekiq’s enqueued jobs that send API requests to the server, serving 300+ organizations including Sensata Technologies, NXP, Entergy, … ',
              'Executed in-time solutions to address end users’ issues by accessing and configuring AWS production databases to update event credits and authenticate users, meeting 80% SLA in customer success']
  },
  {
    time: 'May 2022 - December 2022',
    title: 'Software Engineer Intern @',
    company: 'Rakuna Inc',
    link: 'https://www.rakuna.co/',
    skills: ['Internship', 'Full-time', 'Web Development'],
    description: 'This internship at Rakuna as a software engineer marked my very first step into real-world engineering. I worked cross-functionally with the product team to deliver user stories with an Agile developmennt workflow.',
    bullets: ['Revamped CRM Recruiting form validation schema using Formik, Yup and ReactJS to improve form usability via relevant error messages, which increased form completion rate by 65% and reduced churn rate by 53%',
              'Designed and implemented a scalable microservice using Ruby on Rails, PostgreSQL, ReactJS, and Javascript that duplicated existing Email Campaigns to facilitate faster creation of post-event emails and reduce data migration time in backend by 92%',
              'Performed unit and integration testing with Rspec and FactoryBot while utilizing Docker and Vault for storing secured, encrypted candidate information']
  },
  {
    time: 'August 2022 - May Present',
    title: 'Data Integration Intern @',
    company: 'Miami University',
    link: 'https://miamioh.edu/',
    skills: ['Part-time','Part-time', 'Data Visualization', 'Big Data'],
    description: 'This is my internship description',
    bullets: ['Automated the notification system using iPaaS to target stakeholders and streamlined the process for classroom inspection purposes, reducing 80% response time to IT issues',
              'Enhanced Performance Scorecard by adding 15+ filter dimensions and created a Priority Rubrik leveraging Tableau, doubling 35,000+ IT issue identificationn rates and reducing solution time by 70%']
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

  return (
    <>
      <div style={heading}>
        <motion.div
          whileHover={{ rotate: 180 }}
        >
          <LaptopIcon sx={{ fontSize: '40px', color: 'rgb(68,69,97)' }}/>
        </motion.div>
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'rgb(68,69,97)' }}>My Experience</Typography>
      </div>
      <Grid container alignItems='center'>
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
        <Grid item xs={6} sx={{ marginTop: '30px' }}>
          <div
            style={{
              backgroundColor: selectedItem !== null ? 'rgb(188,192,223,0.3)' : 'none',
              padding: '30px',
              borderRadius: '20px'
            }}
          > 
            <ExperienceDialog experience={selectedItem} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Experience;
import React from 'react';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ActivityCard from './AcitivityCard';
import isacThumbnail from '../../assets/images/isac-0.jpg';
import isacPic01 from '../../assets/images/isac-1.JPG';
// import isacPic02 from '../../assets/images/isac-2.JPG';
import isacPic03 from '../../assets/images/isac-3.jpg';
import vsaThumbnail from '../../assets/images/vsa-0.JPG';
import vsaPic01 from '../../assets/images/vsa-0.JPG';
import vsaPic02 from '../../assets/images/vsa-2.JPG';
import vsaPic03 from '../../assets/images/vsa-3.JPG';
import triwicThumbnail from '../../assets/images/triwic-0.JPG';
import swThumbnail from '../../assets/images/sw-1.jpg';


const activities = [
  { 
    name: 'International Student Advisory Council',
    title: 'Vice President of Professional Development',
    description: 'I am responsible for planning and executing events, workshops, and student panels which serve the major purpose of helping students with professional development, including internships, interviews, and resumes. We also organize social bonding events such as Sports Tournament to foster cross-cultural friendships at MU.',
    thumbnail: isacThumbnail,
    images: [isacThumbnail, isacPic01, isacPic03],
  },
  { 
    name: 'Vietnamese Student Association',
    title: 'Volunteer',
    description: 'I support the executives with planning bi-weekly events and workshops aimed at promoting Vietnamese culture among studets. At VSA Spring Festival, I took part in preparation, decoration, and performing during the event.',
    thumbnail: vsaThumbnail,
    images: [vsaPic01, vsaPic02, vsaPic03],
  },
  { 
    name: 'TriWic 2022 Conference',
    title: 'Participant',
    description: 'I',
    thumbnail: triwicThumbnail,
    images: [triwicThumbnail],
  },
  { 
    name: 'StartUp Weekend',
    title: 'Participant',
    description: 'I',
    thumbnail: swThumbnail,
    images: [swThumbnail],
  },
];

const ActivityContainer = () => {
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
          <Diversity1Icon sx={{ fontSize: '40px', color: 'rgb(68,69,97)' }}/>
        </motion.div>
        <Typography
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'rgb(63,63,98)'
          }}
        >
          My Activities
        </Typography>
      </div>
      <Grid container spacing={3}>
        {activities.map((activity) => {
          return (
            <Grid item xs={6}>
              <ActivityCard 
                activity={activity}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ActivityContainer;
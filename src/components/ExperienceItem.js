import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Chip } from '@mui/material';
import Link from '@mui/material/Link';

const ExperienceItem = (props) => {
  const {experienceInfo} = props;
  const [hovered, setHovered] = useState(false);
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }
  const hoverItem = () => {
    setHovered(true);
  }
  const leaveItem = () => {
    setHovered(false);
  }

  return (
    <TimelineItem
    >
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: '#F56D91' }}/>
        <TimelineConnector sx={{ bgcolor: 'rgb(74,87,89,0.25)' }} />
      </TimelineSeparator>
      <motion.div
        whileHover={{ scale: 1.05 }}
      >
        <TimelineContent>
          <div
            onMouseEnter={hoverItem}
            onMouseLeave={leaveItem}
            style={{
              backgroundColor: hovered ? '#F7F5F2' : 'transparent',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: '15px',
                color: '#707088',
                fontFamily: 'Ubuntu, sans-serif'
              }}
            >
              {experienceInfo.time}
            </Typography>
            <div style={divStyle}>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#626277',
                  fontFamily: 'Ubuntu, sans-serif'
                }}
              >
                {experienceInfo.title}
              </Typography>
              <Link
                href={experienceInfo.link}
                target='_blank'
                underline='hover'
                sx={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#626277',
                }}
              >
                {experienceInfo.company}
              </Link>
            </div>

            {experienceInfo.skills.map((skill) => {
              return (
                <Chip
                  label={skill}
                  style={{
                    color: 'rgb(74,87,89,0.75)',
                    marginRight: '5px',
                    marginTop: '5px',
                    backgroundColor: 'rgb(74,87,89,0.1)'
                  }}
                />
              )
            })}
          </div>
        </TimelineContent>
      </motion.div>
    </TimelineItem>
  )
}

ExperienceItem.propTypes = {
  experienceInfo: PropTypes.object.isRequired,
}

export default ExperienceItem;
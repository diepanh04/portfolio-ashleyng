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
  const {experienceInfo, selectedItem, handleClick} = props;
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
  const clickItem = () => {
    handleClick(experienceInfo);
    setHovered(true);
  };
  const highlight = experienceInfo === selectedItem || hovered;

  return (
    <TimelineItem
    >
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: highlight ? 'rgb(184,201,225,0.4)' : 'rgb(68,69,97)' }}/>
        <TimelineConnector sx={{ bgcolor: highlight ? 'rgb(184,201,225,0.4)' : 'rgb(68,69,97)' }} />
      </TimelineSeparator>
      <motion.div
        whileHover={{ scale: 1.05 }}
      >
        <TimelineContent>
          <div
            onMouseEnter={hoverItem}
            onMouseLeave={leaveItem}
            onClick={clickItem}
            style={{
              backgroundColor: highlight ? 'rgb(163,200,221,0.5)' : 'transparent',
              padding: '10px',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <Typography
              sx={{
                fontSize: '15px',
                color: 'rgb(68,69,97)',
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
                  color: 'rgb(68,69,97)',
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
                  color: 'rgb(68,69,97)',
                }}
              >
                {experienceInfo.company}
              </Link>
            </div>
            <Typography
              sx={{
                fontSize: '16px',
                color: 'rgb(68,69,97)',
                width: '480px',
                fontFamily: 'Ubuntu, sans-serif'
              }}
            >
              {experienceInfo.description}
            </Typography>
            {experienceInfo.skills.map((skill) => {
              return (
                <Chip
                  label={skill}
                  style={{
                    color: 'rgb(68,69,97)',
                    marginRight: '5px',
                    marginTop: '5px',
                    backgroundColor: 'rgb(163,200,221,0.5)'
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
  selectedItem: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default ExperienceItem;
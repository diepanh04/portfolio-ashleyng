import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ActivityCard = (props) => {
  const {activity} = props;
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Accordion
      expanded={open}
      sx={{
        backgroundColor: 'rgb(160,161,199,0.3)',
        padding: '30px',
        cursor: 'pointer'
      }}
    >
      <AccordionSummary>
        <motion.div
          whileHover={{ scale: 1.05 }}
        >
          <Grid
            container
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setOpen(!open)}
          >
            <Grid item>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    color: 'rgb(51,63,74)',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  {activity.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: 'rgb(51,63,74)',
                    fontWeight: hovered ? 'bold' : 'none',
                    paddingTop: '5px',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  {activity.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: 'rgb(51,63,74)',
                    paddingTop: '5px',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  {activity.description}
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign='center' marginTop="15px">
                {open ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </AccordionSummary>
      <AccordionDetails>
          <Grid
            item
            xs={12}
            textAlign='center'
          >
            {activity.images.map((image) => {
              return (
                <img
                  src={image}
                  style={{
                    width: '350px',
                    padding: '15px',
                    border: 'solid white 2px',
                  }}
                />
              )
            })}
          </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired,
}

export default ActivityCard;
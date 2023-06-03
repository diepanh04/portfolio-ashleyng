import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ActivityGalleryDialog from './ActivityGalleryDialog';

const ActivityCard = (props) => {
  const {activity} = props;
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [gallery, setGallery] = useState([]);
  const handleOpenDialog = (gallery) => {
    setOpen(true);
    setGallery(gallery)
  }

  return (
    <Accordion
      expanded={open}
      sx={{
        backgroundColor: 'rgb(182,202,229,0.5)',
        padding: '30px',
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
                    color: 'rgb(51,63,74)'
                  }}
                >
                  {activity.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: 'rgb(28,48,68)',
                    fontWeight: hovered ? 'bold' : 'none',
                    paddingTop: '5px'
                  }}
                >
                  {activity.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    color: 'rgb(51,63,74)',
                    paddingTop: '5px'
                  }}
                >
                  {activity.description}
                </Typography>
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
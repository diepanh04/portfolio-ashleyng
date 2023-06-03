import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = (props) => {
  const { project } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
    >
      <Grid
        container
        sx={{
          padding: '30px',
          backgroundColor: 'rgb(191,199,236,0.5)',
          height: '380px',
          position: 'relative',
        }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open("https://github.com/diepanh04", "_blank")}
      >
        <Grid item container>
          <Grid item xs={1}>
            <FolderOutlinedIcon sx={{ fontSize: '35px', color: 'rgb(63,63,98)' }}/>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: '15px' }}>
          <Typography
            sx={{
              fontSize: '25px',
              fontWeight: 'bold',
              color: hovered ? 'rgb(219,237,255)' : 'rgb(63,63,98)'
            }}
          >
            {project.title}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: '15px',
            height: '140px',
            color: 'rgb(65,65,90)',
          }}
        >
          <Typography>{project.description}</Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: '15px',
            maxWidth: '300px',
            color: 'rgb(51,63,74)',
          }}
        >
          {project.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                marginRight: '5px',
                marginBottom: '5px',
                color: 'rgb(63,63,98)',
              }}
            ></Chip>
          ))}
        </Grid>

        {hovered && (
          <Grid
            container
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <LaunchIcon sx={{ fontSize: '35px', color: 'white' }}/>
          </Grid>
        )}
      </Grid>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

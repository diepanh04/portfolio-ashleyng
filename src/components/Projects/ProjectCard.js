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
          backgroundColor: '#DFDFDE',
          height: '380px',
          position: 'relative',
          borderRadius: '20px'
        }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => window.open("https://github.com/diepanh04", "_blank")}
      >
        <Grid item container>
          <Grid item xs={1}>
            <FolderOutlinedIcon sx={{ fontSize: '35px', color: '#dc6282' }}/>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: '15px' }}>
          <Typography
            sx={{
              fontSize: '25px',
              fontWeight: 'bold',
              color: '#626277',
              fontFamily: 'Ubuntu, sans-serif'
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
            color: 'rgb(74,87,89,0.75)',
          }}
        >
          <Typography style={{ fontFamily: 'Ubuntu, sans-serif' }}>{project.description}</Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: '15px',
            maxWidth: '300px',
            color: '#dc6282',
            fontFamily: 'Ubuntu, sans-serif'
          }}
        >
          {project.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                marginRight: '5px',
                marginBottom: '5px',
                color: 'rgb(74,87,89,0.75)',
                fontFamily: 'Ubuntu, sans-serif'
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
              cursor: 'pointer',
              borderRadius: '20px'
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

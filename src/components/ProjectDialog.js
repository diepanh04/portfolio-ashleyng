import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Chip from '@mui/material/Chip';
import { Typography } from '@mui/material/';
import Box from '@mui/material/Box';

const ProjectDialog = (props) => {
  const {open, title, skills, description, handleClose} = props;
  const dialog = {
    backgroundColor: 'rgb(137,138,166, 0.8)',
    width: '400px',
    height: '300px',
  }
  const skillStyle = {
    margin: '5px',
    fontSize: '18px',
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent style={dialog}>
          <Typography variant='h5' fontWeight='bold'>
            {title}
          </Typography>
          {skills.map((skill) => (
            <Chip label={skill} style={skillStyle}></Chip>
          ))}
          <Typography>
            {description}
          </Typography>
      </DialogContent>
    </Dialog>
  )
}

ProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ProjectDialog;
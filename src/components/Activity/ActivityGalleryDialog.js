import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';

const ActivityGalleryDialog = (props) => {
  const { images, open, onClose } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgb(137, 138, 166)'
        },
      }}
    >
      <DialogContent>
        <Grid
          container
          spacing={2}
          sx={{
            padding: '30px',
          }}
        >
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image}>
              <img
                src={image}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  border: 'solid white 3px'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

ActivityGalleryDialog.propTypes = {
  images: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ActivityGalleryDialog;

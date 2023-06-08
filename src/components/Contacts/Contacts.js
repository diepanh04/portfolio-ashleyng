import React from 'react';
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Contacts = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "50px",
          color: 'rgb(54,55,78)',
          fontFamily: 'Ubuntu, sans-serif'
        }}
      >
        Let's Chat!
      </Typography>
      <Typography>
        
      </Typography>
      <IconButton
        variant="outlined"
        sx={{
          borderColor: 'rgb(68,69,97)',
          color: 'rgb(68,69,97)'
        }}
        href="mailto:"
      >
        <EmailOutlinedIcon sx={{ fontSize: '40px' }}/>
      </IconButton>
    </div>
  )
};

export default Contacts;
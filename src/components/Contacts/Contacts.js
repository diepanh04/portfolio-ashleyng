import React from 'react';
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoDevIcon from '@mui/icons-material/LogoDev';

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
      <IconButton
        variant="outlined"
        sx={{
          borderColor: 'rgb(68,69,97)',
          color: 'rgb(68,69,97)'
        }}
        href="https://www.linkedin.com/in/diep-anh-nguyen/"
      >
        <LinkedInIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
      <IconButton
        variant="outlined"
        sx={{
          borderColor: 'rgb(68,69,97)',
          color: 'rgb(68,69,97)'
        }}
        href="https://github.com/diepanh04"
      >
        <GitHubIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
      <IconButton
        variant="outlined"
        sx={{
          borderColor: 'rgb(68,69,97)',
          color: 'rgb(68,69,97)'
        }}
        href="https://dev.to/diepanh04"
      >
        <LogoDevIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
      <IconButton
        variant="outlined"
        sx={{
          borderColor: 'rgb(68,69,97)',
          color: 'rgb(68,69,97)'
        }}
        href="mailto:ashleydiepanhnguyen@gmail.com"
      >
        <EmailOutlinedIcon sx={{ fontSize: '50px' }}/>
      </IconButton>
    </div>
  )
};

export default Contacts;
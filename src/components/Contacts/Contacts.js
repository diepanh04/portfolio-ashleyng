import React from 'react';
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
    </div>
  )
};

export default Contacts;
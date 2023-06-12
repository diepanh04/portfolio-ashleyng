import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const progLanguages = {
  "Java": 4.5,
  "Javascript": 4.5,
  "Ruby": 4,
  "Python": 4,
  "C++/C#": 4,
  "SQL": 3.5
}

const frameworks = {
  "ReactJS": 5,
  "NodeJS": 5,
  "PostgreSQL": 4,
  "Firebase": 4,
  "Express": 4,
  ".NET": 3,
}

const tools = {
  "Git": 4,
  "Jira": 5,
  "Bitbucket": 5,
  "Sidekiq": 3,
}

const TechStack = () => {
  const text = {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(68,69,97)',
  }
  return (
    <Grid container spacing={10}>
      <Grid item xs={4}>
        {Object.entries(progLanguages).map(([key, value]) => {
          return (
            <>
              <Typography component="legend" sx={text}>{key}</Typography>
              <Rating name="read-only" value={value} readOnly />
            </>
          )
        })}
      </Grid>
      <Grid item xs={4}>
        {Object.entries(frameworks).map(([key, value]) => {
          return (
            <>
              <Typography component="legend" sx={text}>{key}</Typography>
              <Rating name="read-only" value={value} readOnly />
            </>
          )
        })}
      </Grid>
      <Grid item xs={4}>
        {Object.entries(tools).map(([key, value]) => {
          return (
            <>
              <Typography component="legend" sx={text}>{key}</Typography>
              <Rating name="read-only" value={value} readOnly />
            </>
          )
        })}
      </Grid>
    </Grid>
  )
};

export default TechStack;
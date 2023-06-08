import React from 'react';
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

const progLanguages = {
  "Java": 75,
  "Javascript": 75,
  "Ruby": 75,
  "Python": 50,
  "C++/C#": 60,
  "SQL": 50
}

const frameworks = {
  "ReactJS": 80,
  "NodeJS": 80,
  "PostgreSQL": 75,
  "Firebase": 60,
  ".NET": 50,
}

const tools = {
  "Git": 80,
  "Jira": 80,
  "Bitbucket": 80,
  "Sidekiq": 65,
}

const TechStack = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={4}>
        <Table>
          <TableBody>
            {Object.entries(progLanguages).map(([key, value]) => {
              return (
                <TableRow sx={{ height: '50px' }}>
                  <TableCell sx={{ border: 'none', height: '10px' }}>
                    <Typography>{key}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: 'none' }}>{value}</TableCell>
                </TableRow> 
              )
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={4}>
        <Table>
          <TableBody>
            {Object.entries(frameworks).map(([key, value]) => {
              return (
                <TableRow>
                  <TableCell sx={{ border: 'none' }}>
                    <Typography>{key}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: 'none' }}>{value}</TableCell>
                </TableRow> 
              )
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={4}>
        <Table>
          <TableBody>
            {Object.entries(tools).map(([key, value]) => {
              return (
                <TableRow>
                  <TableCell sx={{ border: 'none' }}>
                    <Typography>{key}</Typography>
                  </TableCell>
                  <TableCell sx={{ border: 'none' }}>{value}</TableCell>
                </TableRow> 
              )
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  )
};

export default TechStack;
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Banner from './Banner';
import Experience from './Experience';
import Projects from './Projects';
import Contacts from './Contacts';
import About from './About';
import ContactInfo from './ContactInfo';
import myPhoto from '../assets/images/personal-2.jpeg';

const Homepage = () => {
  const animation = {
    offscreen: {x: 100, opacity: 0},
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 2
      }
    }
  }
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: '20vh' }}>
            <Banner />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '20vh' }}>
            <About />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '10vh' }}>
            <Experience />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '10vh' }}>
            <Projects />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '10vh', textAlign: 'center' }}>
            <Contacts />
          </Grid>
        </Grid>
      </Container>
      <ContactInfo />
    </div>
  )
}

export default Homepage
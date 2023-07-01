import React from 'react';
import { Container, Grid } from '@mui/material/';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Experience from "./components/Experience/Experience";
import ProjectContainer from "./components/Projects/ProjectContainer";
import Introduction from './components/About Me/Introduction';
import ActivityContainer from './components/Activity/ActivityContainer';
import Contacts from './components/Contacts/Contacts';
import ContactInfo from './components/ContactInfo';
import Typography from '@mui/material/Typography';
import './index.css';
import logo from './assets/images/logo.png';

function App() {
  const cardStyle = {
    marginTop: '20%',
    zIndex: 1,
  };
  const expStyle = {
    marginTop: '30%',
    zIndex: 1,
  }
  const projStyle = {
    marginTop: '30%',
    zIndex: 1,
  }

  return (
    <div 
      style={{
        // background: 'radial-gradient(circle, rgba(163,200,221,1) 0%, rgba(121,123,160,1) 100%)',
        background: '#DFDFDE',
        position: 'relative'
      }}
    >
      <img src={logo} style={{ height: '150px', position: 'absolute', top: -50, left: -20, margin: '10px', position: 'fixed' }} alt="Logo" />
      <ContactInfo />
      <NavBar />
      <Container>
        <Grid container>
          <Grid item xs={12} style={cardStyle}>
            <Banner />
          </Grid>
          <Grid item xs={12} style={projStyle}>
            <Introduction />
          </Grid>
          <Grid item xs={12} style={expStyle}>
            <Experience />
          </Grid>
          <Grid item xs={12} style={projStyle}>
            <ProjectContainer />
          </Grid>
          <Grid item xs={12} style={projStyle}>
            <ActivityContainer />
          </Grid>
          <Grid item xs={12} style={projStyle}>
            <Contacts />
          </Grid>
        <Grid item xs={12} style={{ padding: '20px', textAlign: 'center', color: 'rgb(51,63,74, 0.5)' }}>
          <Typography>Designed and Built by Ashley Nguyen</Typography>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

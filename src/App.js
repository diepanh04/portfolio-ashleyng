import React from 'react';
import { Container, Grid } from '@mui/material/';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Circle from "./components/Circle";
import Experience from "./components/Experience/Experience";
import ProjectContainer from "./components/Projects/ProjectContainer";
import Introduction from './components/Introduction';
import ActivityContainer from './components/Activity/ActivityContainer';
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

  const circles = [
    // { size: 200, color: 'rgb(228, 220, 207, 0.7)', top: '-50px', left: '-50px' },
    // { size: 80, color: 'rgb(183, 211, 223, 0.7)', top: '80px', left: '150px' },
    // { size: 40, color: 'rgb(201, 187, 207, 0.7)', top: '150px', left: '100px' },

    // { size: 300, color: 'rgb(228, 220, 207, 0.2)', top: '200px', left: '450px' },
    // { size: 200, color: 'rgb(183, 211, 223, 0.2)', top: '450px', left: '800px' },
    // { size: 100, color: 'rgb(201, 187, 207, 0.2)', top: '80px', left: '800px' },

    // { size: 100, color: 'rgb(201, 187, 207, 0.7)', top: '20px', left: '1350px' },
    // { size: 50, color: 'rgb(240, 219, 219, 0.7)', top: '130px', left: '1320px' },
    // { size: 30, color: 'rgb(183, 211, 223, 0.7)', top: '80px', left: '1300px' },

    // { size: 80, color: 'rgb(228, 220, 207, 0.2)', top: '900px', left: '400px' },
    // { size: 200, color: 'rgb(183, 211, 223, 0.2)', top: '1000px', left: '150px' },
  ];

  // linear-gradient(55deg, rgba(194,202,210,1) 0%, rgba(144,146,186,1) 50%, rgba(137,138,166,1) 64%)
  // linear-gradient(72deg, rgba(187,207,217,1) 0%, rgba(146,157,194,1) 40%, rgba(113,104,147,1) 100%)

  return (
    <div 
      style={{
        background: 'linear-gradient(55deg, rgba(194,202,210,1) 0%, rgba(144,146,186,1) 50%, rgba(137,138,166,1) 100%)',
        position: 'relative'
      }}
    >
      <img src={logo} style={{ height: '150px', position: 'absolute', top: -50, left: -20, margin: '10px' }} alt="Logo" />
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
        <Grid item xs={12} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography>Designed and Built by Ashley Nguyen</Typography>
        </Grid>
        </Grid>
      </Container>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          size={circle.size}
          color={circle.color}
          top={circle.top}
          left={circle.left}
        />
      ))}
    </div>
  );
}

export default App;

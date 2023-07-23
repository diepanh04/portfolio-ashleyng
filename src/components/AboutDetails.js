import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyAvatar from './MyAvatar';
import myPhoto from '../assets/images/personal-2.jpeg';
import isac1 from '../assets/images/isac-0.jpg';
import isac2 from '../assets/images/isac-2.jpg';
import isac3 from '../assets/images/isac-3.jpg';
import vsa1 from '../assets/images/vsa-0.JPG';
import vsa2 from '../assets/images/vsa-1.JPG';
import vsa3 from '../assets/images/vsa-2.JPG';
import vsa4 from '../assets/images/vsa-3.JPG';
import rak1 from '../assets/images/rakuna-1.jpeg';
import rak2 from '../assets/images/rakuna-2.JPG';
import rak3 from '../assets/images/rakuna-3.JPG';
import book1 from '../assets/images/book1.jpeg';
import book2 from '../assets/images/book2.jpg';
import book3 from '../assets/images/book4.jpg';
import book4 from '../assets/images/book5.jpeg';
import book5 from '../assets/images/book6.jpg';

const styles = {
  divContainer: {
    backgroundColor: '#DFDFDE',
    padding: '30px',
    borderRadius: '10px',
    marginRight: '2%',
    marginTop: '20px',
    justifyContent: 'center'
  },
  paragraph: {
    fontSize: '18px',
    color: '#2B3A55',
    fontFamily: 'Ubuntu, sans-serif',
    marginBottom: '10px',
    padding: '10px'
  }
};

const AboutDetails = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <Container>
        <div style={{ textAlign: 'center', position: 'relative', position: 0 }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <img src={myPhoto} style={{ width: '20%', borderRadius: '100%' }}/>
          </div>
          <Box sx={{ position: 'absolute', zIndex: 1, backgroundColor: '#F56D91', width: '100%', left: 50 }} />
        </div> 
        <Typography
          sx={{
            fontSize: '50px',
            fontFamily: 'Ubuntu, sans-serif',
            color: '#2B3A55',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}
        >
          Ashley Nguyen
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div style={styles.divContainer}>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#2B3A55',
                  fontWeight: 'bold',
                  fontFamily: 'Ubuntu, sans-serif',
                  marginBottom: '10px'
                }}
              >
                Introduction
              </Typography>
              <div style={{ display: 'flex', gap: '20px' }}>
                <WorkHistoryIcon sx={{ color: '#2B3A55' }} />
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#2B3A55',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  Former Software Engineer Co-Op at <span style={{ fontWeight: 'bold' }}>Rakuna</span>
                </Typography>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <WorkHistoryIcon sx={{ color: '#2B3A55' }} />
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#2B3A55',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  Former Data Integration Intern at <span style={{ fontWeight: 'bold' }}>Miami University IT Services</span>
                </Typography>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <SchoolIcon sx={{ color: '#2B3A55' }} />
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#2B3A55',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  Attending <span style={{ fontWeight: 'bold' }}>Miami University</span>
                </Typography>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <SchoolIcon sx={{ color: '#2B3A55' }} />
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#2B3A55',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  Studying <span style={{ fontWeight: 'bold' }}>Computer Science</span>
                </Typography>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <LocationOnIcon sx={{ color: '#2B3A55' }} />
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#2B3A55',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  Located in <span style={{ fontWeight: 'bold' }}>the States</span>
                </Typography>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <HomeIcon sx={{ color: '#2B3A55' }} />
                <Typography
                  sx={{
                    fontSize: '18px',
                    color: '#2B3A55',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                >
                  Comes from <span style={{ fontWeight: 'bold' }}>Hanoi, Vietnam</span>
                </Typography>
              </div>
            </div>
            <div style={styles.divContainer}>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#2B3A55',
                  fontWeight: 'bold',
                  fontFamily: 'Ubuntu, sans-serif',
                  marginBottom: '10px'
                }}
              >
                Photos
              </Typography>
            </div>
            <div style={styles.divContainer}>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#2B3A55',
                  fontWeight: 'bold',
                  fontFamily: 'Ubuntu, sans-serif',
                  marginBottom: '10px'
                }}
              >
                Playlist
              </Typography>
            </div>
            <div style={styles.divContainer}>
              <Typography
                sx={{
                  fontSize: '18px',
                  color: '#2B3A55',
                  fontWeight: 'bold',
                  fontFamily: 'Ubuntu, sans-serif',
                  marginBottom: '10px'
                }}
              >
                Reads
              </Typography>
              <Grid container sx={{ textAlign: 'center' }}>
                <Grid item xs={6}>
                  <img src={book1} style={{ height: '200px', marginBottom: '10px' }} />
                  <img src={book3} style={{ height: '200px', marginBottom: '10px' }} />
                  <img src={book5} style={{ height: '200px', marginBottom: '10px' }} />
                </Grid>
                <Grid item xs={6}>
                  <img src={book2} style={{ height: '200px', marginBottom: '10px' }} />
                  <img src={book4} style={{ height: '200px', marginBottom: '10px' }} />
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div style={styles.divContainer}>
              <MyAvatar />
              <Typography sx={styles.paragraph}>
                Hi, my name is <span style={{ color: '#CE7777', fontWeight: 'bold' }}>Ashley Nguyen</span>.
                As I embark on my professional growth journey, I am constantly seeking opportunities to apply
                my skills, acquire new knowledge, establish valuable connections, and explore my true potential.
                The presence of influential individuals in my life, including my family, friends, and colleagues,
                serves as a mirror reflecting my personal growth. I am enthusiastic about expanding my network
                further by connecting with like-minded individuals who are eager to both give and receive. So let's chat!
              </Typography>
            </div>

            <div style={styles.divContainer}>
              <MyAvatar />
              <Typography sx={styles.paragraph}>
                I gained valuable technical skills and real-world problem-solving experience while working at Rakuna. As an intern, I collaborated with multiple departments and later transitioned to a part-time junior software engineer role, where I focused on completing the Interview Scheduling product line. I'm proud to have made a meaningful impact on the business and I'm excited for future opportunities to grow and make a difference.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img src={rak1} style={{ width: '100%', borderRadius: '10px' }}/>
                  <img src={rak2} style={{ width: '100%', borderRadius: '10px' }}/>
                </Grid>
                <Grid item xs={6}>
                  <img src={rak3} style={{ width: '100%', borderRadius: '10px' }}/>
                </Grid>
              </Grid>
            </div>

            <div style={styles.divContainer}>
              <MyAvatar />
              <Typography sx={styles.paragraph}>
                I will be serving as the Vice President of the Professional Development department at ISAC (International Student Advisory Council). In this role, I will be responsible for organizing various events, workshops, and student panels that help students prepare for their professional careers by offering assistance with networking, resume review, and interview preparation. Additionally, we will be planning social bonding events like the Sports Tournament that aim to foster cross-cultural friendships at MU.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img src={isac1} style={{ width: '100%', borderRadius: '10px' }}/>
                  <img src={isac2} style={{ width: '100%', borderRadius: '10px' }}/>
                </Grid>
                <Grid item xs={6}>
                  <img src={isac3} style={{ width: '100%', borderRadius: '10px' }}/>
                </Grid>
              </Grid>
            </div>

            <div style={styles.divContainer}>
              <MyAvatar />
              <Typography sx={styles.paragraph}>
                I support the executives with planning bi-weekly events and workshops aimed at promoting Vietnamese
                culture among studets as well as strengthening the bond of Vietnamese students on campus. At VSA Spring Festival,
                I took part in preparation, decoration, and performing during the event.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <img src={vsa1} style={{ width: '100%', borderRadius: '10px' }}/>
                  <img src={vsa2} style={{ width: '100%', borderRadius: '10px' }}/>
                </Grid>
                <Grid item xs={6}>
                  <img src={vsa3} style={{ width: '100%', borderRadius: '10px' }}/>
                  <img src={vsa4} style={{ width: '100%', borderRadius: '10px' }}/>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AboutDetails
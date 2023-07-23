import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import demo1 from '../assets/images/rakuna_demo4.png';
import demo3 from '../assets/images/rakuna_demo3.png';
import demo5 from '../assets/images/rakuna_demo5.png';
import demo7 from '../assets/images/rakuna_demo7.png';
import demo8 from '../assets/images/rakuna_demo8.png';
import demo9 from '../assets/images/rakuna_demo9.png';
import demo10 from '../assets/images/rakuna_demo10.png';

const ExperienceDetails = () => {
  return (
    <div>
      <Container>
        <div style={{ textAlign: 'center', position: 'relative', position: 0 }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <img src={demo1} style={{ width: '30%' }}/>
          </div>
          <Box sx={{ position: 'absolute', zIndex: 1, backgroundColor: '#F56D91', width: '100%', left: 50 }} />
        </div> 
        <Typography
          sx={{
            fontSize: '35px',
            fontFamily: 'Ubuntu, sans-serif',
            color: '#245953',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}
        >
          Software Engineer @ Rakuna
        </Typography>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={5} sx={{ backgroundColor: '#D8D8D8', padding: '2%', borderRadius: '25px', marginRight: '2%' }}>
            <Typography
              sx={{
                fontSize: '20px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#245953',
                fontWeight: 'bold'
              }}
            >
              About Rakuna
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#245953',
              }}
            >
              A San Francisco-based startup focusing on HR management tools which streamline and simplify
              the recruiting processes of organizations
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ backgroundColor: '#D8D8D8', padding: '2%', borderRadius: '25px', }}>
            <Typography
              sx={{
                fontSize: '20px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#245953',
                fontWeight: 'bold'
              }}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#245953',
              }}
            >
              As a software engineer intern, I contributed to two major product lines of the company,
              CRM Recruiting and Interview Scheduling, along with Recruiter Profile, Prospect List, and App Integration.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '30px' }} spacing={3}>
          <Grid item>
            <Typography  
              sx={{
                fontSize: '28px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#245953',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Interview Scheduling  
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography  
                sx={{
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  color: '#245953',
                  width: '75%',
                }}
              >
                An integral part of any recruitment process, the Interview Scheduling product provides users with a seamless experience
                that ensures smooth interactions between recruiters and candidates.
              </Typography>
            </div>
          </Grid>

          <Grid item container spacing={3}>
            <Grid item xs={6}>
              <img src={demo3} style={{ width: '100%', marginBottom: '20px' }} />
              <img src={demo8} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
              <img src={demo7} style={{ width: '100%', marginBottom: '20px' }} />
              <img src={demo5} style={{ width: '100%' }} />
            </Grid>
          </Grid>

          <Grid item>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography  
                sx={{
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  color: '#245953',
                  width: '75%',
                }}
              >
                I played a key role in developing various components of the Interview Scheduling product line, including the Interview Scheduling mailers,
                Create New page, Show page, and Edit page. My responsibilities encompassed a wide range of tasks, from basic modifications such as altering
                button titles or adjusting the color of calendar times in the past, to more complex undertakings such as configuring timezone converters,
                overseeing Redux-Saga states for updating information, and optimizing form filling with error validation.
                <br />
                <br />
                Redux-Saga was the core of Interview Scheduling codebase, which managed all functionality of the product and streamlined its state updates. 
                It became much less challenging to make changes to events and states. 
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <Typography  
              sx={{
                fontSize: '28px',
                fontFamily: 'Ubuntu, sans-serif',
                color: '#245953',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              CRM Recruiting - Email Campaign
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Typography  
                sx={{
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  color: '#245953',
                  width: '75%',
                }}
              >
                CRM Recruiting, including Email and Text, further automates the recruitment process by allowing recruiters
                to schedule post-event emails that get sent to candidates with highly customizabble features.
              </Typography>
            </div>
          </Grid>

          <Grid item container spacing={3}>
            <Grid item xs={6} sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <img src={demo9} style={{ width: '100%', marginBottom: '20px', justifyContent: 'center' }} />
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <img src={demo10} style={{ width: '100%', marginBottom: '20px' }} />
            </Grid>
          </Grid>

          <Grid item>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography  
                sx={{
                  fontSize: '18px',
                  fontFamily: 'Ubuntu, sans-serif',
                  color: '#245953',
                  width: '75%',
                }}
              >
                I implemented a Duplication button with full functionality for existing email templates. At the click of a button, the template is automaticcally
                duplicated into a new template draft where the user can customize changes with a faster speed. I configured an API endpoint in Ruby on Rails controller
                that executes a POST request so that it identifies if the user is creating a template from scratch or from an existing one. With this feature, I was able
                to work with and understand more about the model - view - controller architeture and how they collabborate with one another. 
                <br />
                <br />
                For form validation, I used a combination of Yup - an asynchronous schema builder, and Formik - a React-based form builder to handle required fields,
                visited fields, and out-focused fields, which tremdously improved form performance and usability. Yup and Formik also help to handle error validation with ease
                which saves time for developers.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default ExperienceDetails
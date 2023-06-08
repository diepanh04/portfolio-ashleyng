import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

const ExperienceDialog = (props) => {
  const {experience} = props;
  const titleStyle = {
    color: 'rgb(68,69,97)',
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  return (
    <div>
      {experience &&
        <div style={{ display: 'flex' }}>
          <Typography style={titleStyle}>{experience.title}</Typography>
          <Typography style={titleStyle}>{experience.company}</Typography>
        </div>
      }
      <List>
        {experience && experience.bullets.map((bullet) => {
          return (
            <>
              <ListItem sx={{ padding: '0' }}>
                <ListItemIcon>
                  <RadioButtonCheckedOutlinedIcon
                    sx={{
                      color: 'rgb(68,69,97)',
                      fontSize: '20px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={bullet}
                  primaryTypographyProps={{
                    color: 'rgb(68,69,97)',
                    fontFamily: 'Ubuntu, sans-serif'
                  }}
                />
              </ListItem>
            </>
          )
        })}
      </List>
      <div style={{ textAlign: 'center' }}>
        {experience.images &&
          experience.images.map((image) => {
            return (
              <img
                src={image}
                style={{
                  height: '250px',
                  padding: '15px',
                  border: 'solid white 2px',
                }}
              />
            )
          })
        }
      </div>
    </div>
  )
}

ExperienceDialog.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default ExperienceDialog;
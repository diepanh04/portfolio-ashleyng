import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ExperienceDialog = (props) => {
  const {experience} = props;

  return (
    <div>
      <List>
        {experience && experience.bullets.map((bullet) => {
          return (
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon sx={{ color: 'rgb(68,69,97)', fontSize: '30px' }}/>
              </ListItemIcon>
              <ListItemText primary={bullet} sx={{ color: 'rgb(68,69,97)'}} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

ExperienceDialog.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default ExperienceDialog;
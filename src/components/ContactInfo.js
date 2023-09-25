import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ContactInfo = () => {
  const [hovered, setHovered] = useState(false);
  const icon = {
    fontSize: '30px',
    color: '#8D8DAA',
    marginRight: '10px'
  }

  return (
    <div style={{ position: 'fixed', bottom: '0', right: '0' }}>
      <List>
        <ListItem>
          <IconButton href="https://www.linkedin.com/in/diep-anh-nguyen/" target="_blank">
            <LinkedInIcon sx={icon}/> 
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton href="https://github.com/diepanh04" target="_blank">
            <GitHubIcon sx={icon}/> 
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton href="https://dev.to/diepanh04" target="_blank">
            <LogoDevIcon sx={icon}/> 
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton href="mailto:ashleydiepanhnguyen@gmail.com" target="_blank">
            <EmailOutlinedIcon sx={icon}/> 
          </IconButton>
        </ListItem>
      </List>
      <div
        style={{
          width: '1px',
          height: '200px',
          background: '#8D8DAA',
          marginLeft: '35px',
        }}
      ></div>
    </div>
  )
};

export default ContactInfo;
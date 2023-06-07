import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const ContactInfo = () => {
  const [hovered, setHovered] = useState(false);
  const icon = {
    fontSize: '30px',
    color: 'rgb(68,69,97,0.8)',
    cursor: 'pointer'
  }

  return (
    <div style={{ position: 'fixed', bottom: '0', right: '0' }}>
      <List>
        <ListItem>
          <ListItemIcon>
           <LinkedInIcon
            sx={icon}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => window.open("https://www.linkedin.com/in/diep-anh-nguyen/", "_blank")}
          /> 
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
           <GitHubIcon
            sx={icon}
            onClick={() => window.open("https://github.com/diepanh04", "_blank")}
          /> 
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
           <LogoDevIcon
            sx={icon}
            onClick={() => window.open("https://dev.to/diepanh04", "_blank")}
          /> 
          </ListItemIcon>
        </ListItem>
      </List>
      <div
        style={{
          width: '1px',
          height: '200px',
          background: '#000000',
          marginLeft: '30px',
          color: 'rgb(68,69,97,0.8)'
        }}
      ></div>
    </div>
  )
};

export default ContactInfo;
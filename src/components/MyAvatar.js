import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import myPhoto from '../assets/images/personal-2.jpeg';

const MyAvatar = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Avatar src={myPhoto} />
      <div>
        <Typography
          sx={{
            fontSize: '18px',
            color: '#2B3A55',
            fontFamily: 'Ubuntu, sans-serif',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}
        >
          Ashley Nguyen
        </Typography>
        <Divider sx={{ backgroundColor: '#CE7777', height: '2px'}}/>
      </div>
    </div>
  )
}

export default MyAvatar;
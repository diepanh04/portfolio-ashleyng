import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import myPhoto from '../assets/images/personal-2.jpeg';

const MyAvatar = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Avatar src={myPhoto} />
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
    </div>
  )
}

export default MyAvatar;
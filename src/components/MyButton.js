import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyButton = (props) => {
  const { text, destination } = props;
  console.log(text);
  return (
    <div style={{ position: 'relative', cursor: 'pointer', }} >
      <div style={{ position: 'relative', zIndex: 2, border: '2px solid #8D8DAA', padding: '10%', width: '30%' }}>
        <Typography
          component={Link}
          to={`/${destination}`}
          sx={{
            color: '#F7F5F2',
            fontWeight: 'bold',
            fontSize: '18px',
            fontFamily: 'Ubuntu, sans-serif',
          }}
        >
          {text}
        </Typography>
      </div>
      <Box sx={{ backgroundColor: '#F56D91', position: 'absolute', zIndex: 1, top: 5, left: 5, width: '100%', height: '100%' }} />
    </div>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MyButton;

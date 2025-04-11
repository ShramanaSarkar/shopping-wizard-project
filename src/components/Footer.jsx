import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1976d2',
        p: 2,
        textAlign: 'center',
        width: '100%', 
        position: 'absolute', 
        bottom: 0, 
        zIndex: 100, 
      }}
    >
      <Typography variant="body2">
        Copyright © Cloudnix Software Labs 2025. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Icon from '../assets/icon.png';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={Icon} alt="Shopnix Icon" style={{ height: 40, marginRight: 10 }} />
          <Typography variant="h6">Shopnix</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
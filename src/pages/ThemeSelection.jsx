import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import bagsThemeImage from '../assets/bags.png';
import flexThemeImage from '../assets/flex.png';
import chicThemeImage from '../assets/chic.png';

function ThemeSelection({ theme, setTheme }) {
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const navigate = useNavigate();

  const themes = [
    {
      name: 'Bags Theme',
      image: bagsThemeImage,
      recommended: true,
    },
    {
      name: 'Flex Theme',
      image: flexThemeImage,
    },
    {
      name: 'Chic Theme',
      image: chicThemeImage,
    },
  ];

  const handleApply = (themeName) => {
    setSelectedTheme(themeName);
    setTheme(themeName);
  };


  const handleNext = () => {
    navigate('/product-type'); 
  };

  return (
    <Box sx={{ p: 4, maxWidth: '1000px' }}>
      <Typography variant="h4" gutterBottom>
        <strong>Apply a theme</strong>
      </Typography>
      <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {themes.map((theme) => (
          <Grid item xs={12} sm={6} md={4} key={theme.name}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={theme.image}
                alt={theme.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  <strong>{theme.name}</strong> {theme.recommended && '(recommended)'}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ mt: 4 }}
                  onClick={() => handleApply(theme.name)}
                  disabled={selectedTheme === theme.name}
                  endIcon={selectedTheme === theme.name ? <CheckCircle sx={{ color: 'green' }} /> : null}
                >
                  {selectedTheme === theme.name ? 'Checked' : 'Apply'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default ThemeSelection;

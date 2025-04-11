import React from 'react';
import { Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DashboardPage({ products, theme }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard - Products
      </Typography>
      <Typography variant="body1" gutterBottom>
        Selected Theme: {theme || 'Not Selected'}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="outlined" onClick={() => navigate('/')}>Select Theme</Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/product-type')}>Add New Product</Button>
      </Box>
      <List>
        {products.map((product, index) => (
          <ListItem key={index} alignItems="flex-start" disablePadding>
            <ListItemButton onClick={() => navigate(`/edit-product/${product.productId}`)}>
              <ListItemAvatar>
                <Avatar alt="Product Image" src={product.image} />
              </ListItemAvatar>
              <ListItemText
                primary={product.productName}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {product.productDescription}
                    </Typography>
                    {` - Product Type: ${product.productType}, Category: ${product.category}, Sub-category: ${product.subcategory}`}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default DashboardPage;
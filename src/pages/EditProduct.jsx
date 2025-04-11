import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, TextField, Button, Checkbox, FormControlLabel, Paper, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct({ products, updateProduct }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.productId === parseInt(productId));

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [skuCode, setSkuCode] = useState('');
  const [hsnSacCode, setHsnSacCode] = useState('');
  const [netPrice, setNetPrice] = useState('');
  const [listPrice, setListPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [gstRate, setGstRate] = useState('');
  const [shippingCharges, setShippingCharges] = useState('');
  const [stockLevel, setStockLevel] = useState('');
  const [image, setImage] = useState(null);
  const [productType, setProductType] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  useEffect(() => {
    console.log(product);
    if (product) {
      setProductType(product.productType);
      setCategory(product.category);
      setSubcategory(product.subcategory);
      setProductName(product.productName);
      setProductDescription(product.productDescription);
      setImage(product.image);
      setSkuCode(product.skuCode)
      setHsnSacCode(product.hsnSacCode)
      setNetPrice(product.netPrice)
      setListPrice(product.listPrice)
      setDiscountPercentage(product.discountPercentage)
      setGstRate(product.gstRate)
      setShippingCharges(product.shippingCharges)
      setStockLevel(product.stockLevel)
    }
  }, [product]);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleUpdateProduct = () => {
    updateProduct({
        productId: parseInt(productId),
      productName,
      productDescription,
      image,
      skuCode,
      hsnSacCode,
      netPrice,
      listPrice,
      discountPercentage,
      gstRate,
      shippingCharges,
      stockLevel,
      productType,
      category,
      subcategory,
    });
    navigate('/dashboard');
  };

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Edit Product
      </Typography>
      <Grid container spacing={2} alignItems="flex-start">
      <Grid item xs={12} md={6} sx={{ maxWidth: '40%', height: '600px', overflowY: 'scroll', boxShadow: 2, p: 2 }}>
            <Typography variant="h5" gutterBottom>
                <strong>Lets add your first product</strong>
            </Typography>
          <Typography variant="h6">Basic Details</Typography>
          <TextField
            label="Product name"
            fullWidth
            margin="normal"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <TextField
            label="Product Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <Paper
            elevation={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 150,
              mt: 2,
            }}
          >
            <IconButton component="label">
              <PhotoCamera />
              <input type="file" accept="image/*" hidden onChange={handleImageChange} />
            </IconButton>
          </Paper>
          <FormControlLabel
            control={
              <Checkbox
                checked={skuCode !== ''}
                onChange={(e) => setSkuCode(e.target.checked ? 'eg - PROD0001' : '')}
              />
            }
            label="this product has an SKU code"
          />
          {skuCode && (
            <TextField
              label="eg - PROD0001"
              fullWidth
              margin="normal"
              value={skuCode}
              onChange={(e) => setSkuCode(e.target.value)}
            />
          )}
          <FormControlLabel
            control={
              <Checkbox
                checked={hsnSacCode !== ''}
                onChange={(e) => setHsnSacCode(e.target.checked ? 'eg - 20' : '')}
              />
            }
            label="this product has an HSN/SAC code"
          />
          {hsnSacCode && (
            <TextField
              label="eg - 20"
              fullWidth
              margin="normal"
              value={hsnSacCode}
              onChange={(e) => setHsnSacCode(e.target.value)}
            />
          )}

          <Typography variant="h6" sx={{ mt: 4 }}>Pricing Details</Typography>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="price inclusive of GST"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Net price"
                fullWidth
                margin="normal"
                value={netPrice}
                onChange={(e) => setNetPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="List price"
                fullWidth
                margin="normal"
                value={listPrice}
                onChange={(e) => setListPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Discount percentage"
                fullWidth
                margin="normal"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="GST rate"
                fullWidth
                margin="normal"
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Shipping charges (if any)"
                fullWidth
                margin="normal"
                value={shippingCharges}
                onChange={(e) => setShippingCharges(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Stock level"
                fullWidth
                margin="normal"
                value={stockLevel}
                onChange={(e) => setStockLevel(e.target.value)}
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
            <Button variant="contained" color="primary" onClick={handleUpdateProduct}>Next</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <img src={image} alt="Product Preview" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>{productName}</Typography>
            <Typography variant="body2">{productDescription}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditProduct;
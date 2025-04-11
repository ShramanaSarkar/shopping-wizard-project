import React, { useState } from "react";
import { Typography, Grid, Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productTypeImage from "../assets/product_type.png";

function ProductTypePage({ setProductType, setCategory, setSubcategory }) {
  const [productTypeValue, setProductTypeValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [subcategoryValue, setSubcategoryValue] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    setProductType(productTypeValue);
    setCategory(categoryValue);
    setSubcategory(subcategoryValue);
    navigate("/add-product");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            <strong>Lets add a type, Category and Sub-category</strong>
          </Typography>
          <TextField
            label="Add a product type"
            fullWidth
            margin="normal"
            value={productTypeValue}
            onChange={(e) => setProductTypeValue(e.target.value)}
          />
          <TextField
            label="Add a category (optional)"
            fullWidth
            margin="normal"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          />
          <TextField
            label="Add a sub-category (optional)"
            fullWidth
            margin="normal"
            value={subcategoryValue}
            onChange={(e) => setSubcategoryValue(e.target.value)}
          />
          <Box sx={{ mt: 2, display: "flex" }}>
            <Button
              variant="outlined"
              sx={{ mr: 1 }}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={productTypeImage}
            alt="Product Type Diagram"
            style={{ maxWidth: "500px", maxHeight: "325px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductTypePage;

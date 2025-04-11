import React, { useState } from 'react';
import ThemeSelection from './pages/ThemeSelection';
import ProductTypePage from './pages/ProductTypePage';
import AddProduct from './pages/AddProduct';
import DashboardPage from './pages/DashboardPage';
import EditProduct from './pages/EditProduct';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(null);
  const [productType, setProductType] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [products, setProducts] = useState([]);
  const [countProduct, setCountProduct] = useState(0);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.productId === updatedProduct.productId ? updatedProduct : product)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeSelection theme={theme} setTheme={setTheme} />} />
        <Route path="/product-type" element={<ProductTypePage setProductType={setProductType} setCategory={setCategory} setSubcategory={setSubcategory} />} />
        <Route path="/add-product" element={<AddProduct countProduct={countProduct} setCountProduct={setCountProduct} addProduct={addProduct} productType={productType} category={category} subcategory={subcategory} />} />
        <Route path="/dashboard" element={<DashboardPage products={products} theme={theme} />} />
        <Route path="/edit-product/:productId" element={<EditProduct products={products} updateProduct={updateProduct} />} />
      </Routes>
    </Router>
  );
}

export default App;
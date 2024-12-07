import React, { useContext, useState } from "react";
import { Button, TextField, Grid, Paper, Typography, Box } from "@mui/material";
import productsData from "../data/products";
import { productText } from "../context/Product/ProductContext";
import {
  createProductFailed,
  createProductStart,
  createProductSuccess,
  deleteProductFailed,
  deleteProductStart,
  deleteProductSuccess,
} from "../context/Product/ProductActions";

const AdminProducts = () => {
  const [products, setProducts] = useState(productsData);
  const [form, setForm] = useState({ name: "", salePrice: "", image: "" });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Thêm state tìm kiếm

  // Thêm sản phẩm
  const handleAddProduct = () => {
    if (!form.name || !form.salePrice || !form.image) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const newProduct = {
      id: products.length + 1,
      name: form.name,
      salePrice: parseFloat(form.salePrice),
      image: form.image,
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", salePrice: "", image: "" });
    dispatch(createProductStart());
    try {
      dispatch(createProductSuccess(newProduct));
    } catch (error) {
      console.log(error);
      dispatch(createProductFailed());
    }
  };

  // Sửa sản phẩm
  const handleEditProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingId ? { ...product, ...form } : product
    );
    setProducts(updatedProducts);
    setForm({ name: "", salePrice: "", image: "" });
    setEditingId(null);
  };

  // Xóa sản phẩm
  const { productsCT, dispatch } = useContext(productText);
  console.log("check productsCT admin", productsCT.products.length);
  const handleDeleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    console.log("check", id);

    dispatch(deleteProductStart());
    try {
      dispatch(deleteProductSuccess(id));
    } catch (error) {
      console.log(error);
      dispatch(deleteProductFailed());
    }
  };

  // Đặt form khi sửa
  const handleEditClick = (product) => {
    setForm({ name: product.name, price: product.price, image: product.image });
    setEditingId(product.id);
  };

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Quản lý sản phẩm
      </Typography>

      {/* Form thêm hoặc sửa sản phẩm */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          {editingId ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Tên sản phẩm"
              fullWidth
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Giá sản phẩm"
              type="number"
              fullWidth
              value={form.salePrice}
              onChange={(e) => setForm({ ...form, salePrice: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="URL hình ảnh"
              fullWidth
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            {editingId ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditProduct}
              >
                Lưu thay đổi
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddProduct}
              >
                Thêm sản phẩm
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>

      {/* Ô tìm kiếm */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Tìm kiếm sản phẩm"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Danh sách sản phẩm đã lọc */}
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body1">Giá: {product.price} VND</Typography>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleEditClick(product)}
                  sx={{ mr: 1 }}
                >
                  Sửa
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Xóa
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminProducts;

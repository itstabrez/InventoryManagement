import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

const AddProductDialog = ({ open, onClose, onAdd }) => {
  const [product, setProduct] = useState({
    name: "",
    id: "",
    category: "",
    price: "",
    quantity: "",
    unit: "",
    expiry: "",
    threshold: "",
    image: null,
    availability: "In-Stock",
  });

  const handleChange = (field, value) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProduct((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = () => {
    onAdd(product);
    onClose();
    setProduct({
      name: "",
      id: "",
      category: "",
      price: "",
      quantity: "",
      unit: "",
      expiry: "",
      threshold: "",
      image: null,
      availability: "In-Stock",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>New Product</DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          {/* Image Upload */}
          <Grid size={{ xs: 12 }}>
            <Box
              sx={{
                border: "2px dashed #ccc",
                borderRadius: 2,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => document.getElementById("product-image").click()}
            >
              <input
                type="file"
                id="product-image"
                accept="image/*"
                hidden
                onChange={handleImageUpload}
              />
              <Typography variant="body2" color="text.secondary">
                Drag image here
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{ textDecoration: "underline" }}
              >
                or Browse image
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Product Name"
              value={product.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Product ID"
              value={product.id}
              onChange={(e) => handleChange("id", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Category"
              select
              value={product.category}
              onChange={(e) => handleChange("category", e.target.value)}
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Beverage">Beverage</MenuItem>
              <MenuItem value="Cleaning">Cleaning</MenuItem>
            </TextField>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Buying Price"
              value={product.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Quantity"
              value={product.quantity}
              onChange={(e) => handleChange("quantity", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Unit"
              value={product.unit}
              onChange={(e) => handleChange("unit", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Expiry Date"
              value={product.expiry}
              onChange={(e) => handleChange("expiry", e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Threshold Value"
              value={product.threshold}
              onChange={(e) => handleChange("threshold", e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined" color="inherit">
          Discard
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Add Product
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProductDialog;

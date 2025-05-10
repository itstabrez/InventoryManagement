import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import OverallInventory from "../components/OverallInventory";
import AddProductDialog from "../components/AddProductDialogBox";

const InventoryScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const rowsPerPage = 7;
  const [page, setPage] = useState(0);
  const [filterCategory, setFilterCategory] = useState("All");
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddProduct = (newProductData) => {
    setProducts([...allProducts, newProductData]);
    setOpenAddDialog(false);
  };

  const inventoryData = [
    {
      title: "Categories",
      count: "14",
      subtitle: "Last 7 days",
      color: theme.palette.primary.main,
    },
    {
      title: "Total Products",
      count: "868",
      revenue: "₹25000",
      subtitle: "Last 7 days",
      revenueLabel: "Revenue",
      color: theme.palette.warning.main,
    },
    {
      title: "Top Selling",
      count: "5",
      revenue: "₹2500",
      subtitle: "Last 7 days",
      revenueLabel: "Cost",
      color: theme.palette.secondary.main,
    },
    {
      title: "Low Stocks",
      count: "12",
      outOfStock: "2",
      subtitle: "Ordered",
      outOfStockLabel: "Not in stock",
      color: theme.palette.error.main,
    },
  ];

  const allProducts = [
    {
      name: "Maggi",
      category: "Food",
      price: "₹430",
      quantity: "43 Packets",
      threshold: "12 Packets",
      expiry: "11/12/22",
      availability: "In-stock",
    },
    {
      name: "Bru",
      category: "Beverage",
      price: "₹257",
      quantity: "22 Packets",
      threshold: "12 Packets",
      expiry: "21/12/22",
      availability: "Out of stock",
    },
    {
      name: "Red Bull",
      category: "Beverage",
      price: "₹405",
      quantity: "36 Packets",
      threshold: "9 Packets",
      expiry: "5/12/22",
      availability: "In-stock",
    },
    {
      name: "Bourn Vita",
      category: "Beverage",
      price: "₹502",
      quantity: "14 Packets",
      threshold: "6 Packets",
      expiry: "8/12/22",
      availability: "Out of stock",
    },
    {
      name: "Horlicks",
      category: "Beverage",
      price: "₹530",
      quantity: "5 Packets",
      threshold: "5 Packets",
      expiry: "9/1/23",
      availability: "In-stock",
    },
    {
      name: "Harpic",
      category: "Cleaning",
      price: "₹605",
      quantity: "10 Packets",
      threshold: "5 Packets",
      expiry: "9/1/23",
      availability: "In-stock",
    },
    {
      name: "Ariel",
      category: "Cleaning",
      price: "₹408",
      quantity: "23 Packets",
      threshold: "7 Packets",
      expiry: "15/12/23",
      availability: "Out of stock",
    },
    {
      name: "Scotch Brite",
      category: "Cleaning",
      price: "₹359",
      quantity: "43 Packets",
      threshold: "8 Packets",
      expiry: "6/6/23",
      availability: "In-stock",
    },
    {
      name: "Coca cola",
      category: "Beverage",
      price: "₹205",
      quantity: "41 Packets",
      threshold: "10 Packets",
      expiry: "11/11/22",
      availability: "Low stock",
    },
  ];

  const [products, setProducts] = useState(allProducts);
  const filteredProducts =
    filterCategory === "All"
      ? products
      : products.filter((p) => p.category === filterCategory);

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];
  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const getAvailabilityColor = (status, theme) => {
    switch (status.toLowerCase()) {
      case "in-stock":
        return theme.palette.success.main;
      case "out of stock":
        return theme.palette.error.main;
      case "low stock":
        return theme.palette.warning.main;
      default:
        return theme.palette.text.primary;
    }
  };
  return (
    <Box sx={{ px: isMobile ? 1 : 3, py: 7 }}>
      <OverallInventory inventoryData={inventoryData} />
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: theme.palette.background.colorWhite,
          overflowX: "auto",
        }}
      >
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isMobile ? "stretch" : "center"}
          mb={2}
          gap={2}
        >
          <Typography variant="h6" fontWeight={600}>
            Products
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button variant="contained" onClick={() => setOpenAddDialog(true)}>
              Add Product
            </Button>
            <AddProductDialog
              open={openAddDialog}
              onClose={() => setOpenAddDialog(false)}
              onAdd={handleAddProduct}
            />

            <FormControl size="small">
              <InputLabel>Category</InputLabel>
              <Select
                value={filterCategory}
                label="Category"
                onChange={(e) => setFilterCategory(e.target.value)}
                sx={{ minWidth: 130 }}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="outlined">Download all</Button>
          </Stack>
        </Box>

        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Products</strong>
                </TableCell>
                <TableCell>
                  <strong>Buying Price</strong>
                </TableCell>
                <TableCell>
                  <strong>Quantity</strong>
                </TableCell>
                <TableCell>
                  <strong>Threshold Value</strong>
                </TableCell>
                <TableCell>
                  <strong>Expiry Date</strong>
                </TableCell>
                <TableCell>
                  <strong>Availability</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{ "& .MuiTableCell-root": { py: 2 } }}>
              {paginatedProducts.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.threshold}</TableCell>
                  <TableCell>{item.expiry}</TableCell>
                  <TableCell
                    sx={{
                      color: getAvailabilityColor(item.availability, theme),
                    }}
                  >
                    {item.availability}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Controls */}
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outlined"
            size="small"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <Typography variant="body2" color="text.secondary">
            Page {page + 1} of{" "}
            {Math.ceil(filteredProducts.length / rowsPerPage)}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            disabled={(page + 1) * rowsPerPage >= filteredProducts.length}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default InventoryScreen;

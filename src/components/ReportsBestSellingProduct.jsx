import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  useTheme,
} from "@mui/material";

const data = [
  {
    name: "Carrot",
    id: "4578",
    category: "Vegetable",
    quantity: "125 kg",
    turnover: "74,000",
    increase: "6.5%",
  },
  {
    name: "Potato",
    id: "1235",
    category: "Vegetable",
    quantity: "140 kg",
    turnover: "10,000",
    increase: "4.3%",
  },
  {
    name: "Lassi",
    id: "4563",
    category: "Drinks",
    quantity: "100 Packet",
    turnover: "12,000",
    increase: "3.2%",
  },
  {
    name: "Soap",
    id: "1245",
    category: "Household",
    quantity: "180 Packet",
    turnover: "₹4,000",
    increase: "8.5%",
  },
];

const BestSellingProducts = () => {
  const theme = useTheme();

  return (
    <Paper elevation={1} sx={{ borderRadius: 3, p: 3 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight={600}>
          Best selling product
        </Typography>
        <Link
          href="#"
          underline="none"
          color={theme.palette.primary.main}
          fontWeight={500}
        >
          See All
        </Link>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                Product
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                Product ID
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                Category
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                Remaining Quantity
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                Turn Over
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                Increase By
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.turnover}</TableCell>
                <TableCell sx={{ color: "green", fontWeight: 500 }}>
                  {row.increase}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BestSellingProducts;

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
  Divider,
} from "@mui/material";

const TopSellingStock = ({ title, topSellingItem }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, p: 3, mb: 3, width: "68%" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        {/* See All link */}
        <Link
          href="#"
          underline="hover"
          sx={{
            color: "primary.main",
            "&:hover": {
              color: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          See All
        </Link>
      </Box>

      {/* Table */}
      <TableContainer elevation={3} sx={{ mb: 2 }}>
        <Divider></Divider>
        <Table size="small" aria-label="top selling stock table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", py: 2 }}>Name</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold", py: 2 }}>
                Sold Quantity
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold", py: 2 }}>
                Remaining Quantity
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold", py: 2 }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "& .MuiTableCell-root": { py: 2 } }}>
            {topSellingItem.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.soldQuantity}</TableCell>
                <TableCell align="right">{row.remainingQuantity}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopSellingStock;

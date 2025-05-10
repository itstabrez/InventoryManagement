import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@mui/material";

const BestSellingCategory = ({ categoryData, label }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, p: 2, ml: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight={600}>
          {label}
        </Typography>
        <Link
          href="#"
          underline="hover"
          color="primary"
          fontWeight={500}
          fontSize="0.9rem"
        >
          See All
        </Link>
      </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Turn Over</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Increase By</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.turnover}</TableCell>
              <TableCell sx={{ color: "success.main", fontWeight: 500 }}>
                {row.growth}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BestSellingCategory;

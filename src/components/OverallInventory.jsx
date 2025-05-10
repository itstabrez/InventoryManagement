import { Box, Paper, Typography, Grid, useTheme } from "@mui/material";

const OverallInventory = ({ inventoryData }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        borderRadius: 3,
        p: 3,
        mb: 3,
        backgroundColor: theme.palette.background.colorWhite,
      }}
      elevation={0}
    >
      <Typography variant="h6" fontWeight={600} mb={3}>
        Overall Inventory
      </Typography>

      <Grid
        container
        spacing={5}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {inventoryData.map((item, index) => (
          <Box
            size={{ xs: 12, sm: 6, md: 3 }}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              position: "relative",
            }}
          >
            <Typography fontWeight={600} color={item.color}>
              {item.title}
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              gap={10}
            >
              <Typography variant="h6" fontWeight={700}>
                {item.count}
              </Typography>
              {item.revenue && (
                <Typography variant="h6" fontWeight={700}>
                  {item.revenue}
                </Typography>
              )}
              {item.outOfStock && (
                <Typography variant="h6" fontWeight={700}>
                  {item.outOfStock}
                </Typography>
              )}
            </Box>

            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Typography variant="body2" color="text.secondary">
                {item.subtitle}
              </Typography>
              {item.revenueLabel && (
                <Typography variant="body2" color="text.secondary">
                  {item.revenueLabel}
                </Typography>
              )}
              {item.outOfStockLabel && (
                <Typography variant="body2" color="text.secondary">
                  {item.outOfStockLabel}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Grid>
    </Paper>
  );
};

export default OverallInventory;

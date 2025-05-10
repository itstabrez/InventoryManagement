import { Paper, Typography, Box, Grid } from "@mui/material";

const InventorySummaryCard = ({ title, data }) => (
  <Paper elevation={1} sx={{ borderRadius: 3, p: 2, width: "30%" }}>
    <Typography variant="h6" fontWeight={600} gutterBottom>
      {title}
    </Typography>
    <Grid container alignItems="center">
      {data.map((item, index) => (
        <Grid
          size={{ xs: 12, sm: 12, md: 6 }}
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            borderRight: index === 0 ? "1px solid #eee" : "none",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              mb: 1,
              backgroundColor: item.bgColor,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </Box>
          <Typography fontWeight={600} color="text.heading">
            {item.value}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
            sx={{ mb: 2 }}
          >
            {item.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default InventorySummaryCard;

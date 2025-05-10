import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";

const OverviewCard = ({ title = "Overview", data = [] }) => {
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, p: 2, width: "68%" }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {data.map((item, index) => (
          <Box
            size={{ xs: 12, sm: 4, md: 3 }}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              pr: index < data.length - 1 ? 3 : 0,
              // mr: index < data.length - 1 ? 1 : 0,
              borderRight: index < data.length - 1 ? "1px solid #eee" : "none",
            }}
          >
            <Box>{item.icon}</Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography pr={3}>{item.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Paper>
  );
};

export default OverviewCard;

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Grid,
  Divider,
} from "@mui/material";

const ReportsOverview = ({ label = "Overview", data }) => {
  const firstRow = data.slice(0, 3);
  const secondRow = data.slice(3, 7);
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, p: 2, width: "68%" }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {label}
      </Typography>

      {/* First Row - 3 items */}
      <Grid container spacing={2} mt={2} sx={{ pl: 5 }}>
        {firstRow.map((item, index) => (
          <Grid key={`first-${index}`}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
                pr: index < firstRow.length - 1 ? 10 : 0,
                mr: index < firstRow.length - 1 ? 10 : 0,
              }}
            >
              <Box>{item.value}</Box>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography
                  variant="body2"
                  color={item.color ? item.color : ""}
                >
                  {item.subHeading}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mb: 2 }} />
      {/* Second Row - 4 items */}
      <Grid container spacing={2} mt={1} sx={{ pl: 5 }}>
        {secondRow.map((item, index) => (
          <Grid key={`second-${index}`}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1,
                pr: index < secondRow.length - 1 ? 5 : 0,
                mr: index < secondRow.length - 1 ? 3 : 0,
              }}
            >
              <Box>{item.value}</Box>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography variant="body2">{item.subHeading}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ReportsOverview;

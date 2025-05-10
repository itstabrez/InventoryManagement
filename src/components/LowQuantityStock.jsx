import {
  Box,
  Typography,
  Paper,
  Link,
  Avatar,
  Stack,
  Chip,
  useTheme,
} from "@mui/material";

const LowQuantityStock = ({ title, stockItem }) => {
  const theme = useTheme();

  return (
    <Paper sx={{ borderRadius: 3, p: 3, mb: 3, width: "30%" }} elevation={1}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Link href="#" underline="none" fontSize={14} color="text.secondary">
          See All
        </Link>
      </Box>

      <Stack spacing={2}>
        {stockItem.map((item, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            flexWrap={"wrap"}
            gap={1}
          >
            <Avatar
              src={item.image}
              variant="rounded"
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box flex={1}>
              <Typography fontWeight={600}>{item.name}</Typography>
              <Typography color="text.secondary" fontSize={14}>
                Remaining Quantity : {item.quantity} Packet
              </Typography>
            </Box>
            <Chip
              label="Low"
              size="small"
              sx={{
                bgcolor: theme.palette.background.error,
                color: theme.palette.text.colorLightRed,
                fontWeight: 500,
                borderRadius: 1.5,
              }}
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
};

export default LowQuantityStock;

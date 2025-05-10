import { useState } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const SalesAndPurchaseOverview = ({
  title = "Sales And Purchase",
  salesDataForCharts = [],
  purchaseDataForCharts = [],
  months = [],
}) => {
  const [timeRange, setTimeRange] = useState("monthly");

  const handleTimeRangeChange = (event, newRange) => {
    if (newRange !== null) {
      setTimeRange(newRange);
    }
  };
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        mb: 3,
        width: "68%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <ToggleButtonGroup
          value={timeRange}
          exclusive
          onChange={handleTimeRangeChange}
          size="small"
          sx={{ height: "32px" }}
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <BarChart
          series={[
            {
              data: purchaseDataForCharts,
              label: "Purchase",
              id: "purchaseId",
              color: theme.palette.background.purchaseBarColor,
            },
            {
              data: salesDataForCharts,
              label: "Sales",
              id: "salesId",
              color: theme.palette.background.saleBarColor,
            },
          ]}
          height={350}
          borderRadius={10}
          xAxis={[
            {
              data: months,
              scaleType: "band",
              barGapRatio: 2,
            },
          ]}
          margin={{ top: 20, bottom: 50, left: 50, right: 20 }}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "bottom", horizontal: "middle" },
              padding: 0,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SalesAndPurchaseOverview;

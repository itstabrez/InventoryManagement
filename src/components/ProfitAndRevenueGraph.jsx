import { Line } from "react-chartjs-2";
import { Paper, Typography, Box, Stack, Button } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useTheme } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ProfitRevenueChart = ({ chartData, label }) => {
  const theme = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.raw.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <Paper elevation={1} sx={{ borderRadius: 3, p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          {label}
        </Typography>
        <Button
          startIcon={<CalendarTodayIcon />}
          variant="outlined"
          size="small"
          sx={{ borderRadius: 2, textTransform: "none" }}
        >
          Weekly
        </Button>
      </Stack>
      <Box sx={{ height: 350, mt: 2 }}>
        <Line options={options} data={chartData} />
      </Box>
    </Paper>
  );
};

export default ProfitRevenueChart;

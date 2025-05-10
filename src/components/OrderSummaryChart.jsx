import { Line } from "react-chartjs-2";
import { Paper, Typography, Box } from "@mui/material";

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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        stepSize: 1000,
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
  },
};

const OrderSummaryChart = ({ title, lineChartData }) => {
  return (
    <Paper elevation={1} sx={{ borderRadius: 3, p: 2, width: "30%", mb: 3 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      <Box sx={{ height: 350 }}>
        <Line options={options} data={lineChartData} />
      </Box>
    </Paper>
  );
};

export default OrderSummaryChart;

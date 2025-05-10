import { Box, useTheme, useMediaQuery } from "@mui/material";
import ReportsOverview from "../components/ReportsOverview";
import BestSellingCategory from "../components/ReportsBestSellingCategory";
import ProfitRevenueChart from "../components/ProfitAndRevenueGraph";
import BestSellingProducts from "../components/ReportsBestSellingProduct.jsx";

const ReportsScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const reportsOverviewData = [
    {
      id: 1,
      subHeading: "Total Profit",
      value: "₹ 21,580",
    },
    {
      id: 2,
      subHeading: "Revenue",
      value: "₹ 18,580",
      color: theme.palette.warning.main,
    },
    {
      id: 3,
      subHeading: "Sales",
      value: "₹ 15,580",
      color: theme.palette.primary.main,
    },
    {
      id: 4,
      subHeading: "Net Purchase Value",
      value: "₹ 31,580",
    },
    {
      id: 5,
      subHeading: "Net Sale Value",
      value: "₹ 54,650",
    },
    {
      id: 6,
      subHeading: "Max Profit",
      value: "₹ 30,580",
    },
    {
      id: 1,
      subHeading: "YoY Profit",
      value: "₹ 1,21,680",
    },
  ];
  const categoryData = [
    { name: "Vegetable", turnover: "₹26,000", growth: "3.2%" },
    { name: "Instant Food", turnover: "₹22,000", growth: "2%" },
    { name: "Households", turnover: "₹22,000", growth: "1.5%" },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [
          110215487, 856547321, 220342123, 874565231, 85456547, 95654587,
          124123654,
        ],
        fill: false,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        tension: 0.4,
      },
      {
        label: "Profit",
        data: [
          152321478, 135624785, 45856547, 65458745, 754565412, 145652312,
          152453652,
        ],
        fill: false,
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main,
        tension: 0.4,
      },
    ],
  };
  return (
    <Box sx={{ px: isMobile ? 1 : 3, py: 7 }}>
      <Box
        mb={3}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ReportsOverview data={reportsOverviewData} label={"Overview"} />
        <BestSellingCategory
          categoryData={categoryData}
          label={"Best selling category"}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <ProfitRevenueChart chartData={chartData} label={"Profit & Revenue"} />
      </Box>

      <BestSellingProducts />
    </Box>
  );
};

export default ReportsScreen;

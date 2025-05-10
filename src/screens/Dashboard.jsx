import { Box, useTheme, useMediaQuery } from "@mui/material";
import OverviewCard from "../components/OverviewCard";
import InventorySummaryCard from "../components/InventorySummaryCard";
import SalesAndPurchaseOverview from "../components/SalesAndPurchaseOverviewBarChart";
import LowQuantityStock from "../components/LowQuantityStock";
import TopSellingStock from "../components/TopSellingStock";
import OrderSummaryChart from "../components/OrderSummaryChart";
import SvgUtils from "../utils/SvgUtils";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //Dummy Bar Chart Data For Sales And Purchase
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const purchaseDataForCharts = [
    60000, 30000, 35000, 40000, 35000, 25000, 24000, 40000,
  ];
  const salesDataForCharts = [
    40000, 25000, 25000, 38000, 29000, 24500, 23000, 38000,
  ];

  //Dummy Line Chart Data
  const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
  const lineChartData = {
    labels,
    datasets: [
      {
        label: "Ordered",
        data: [3800, 1500, 2300, 1200, 2100],
        fill: true,
        backgroundColor: "rgba(242, 201, 150, 0.1)",
        borderColor: "#B77A2C",
        tension: 0.4,
      },
      {
        label: "Delivered",
        data: [3200, 3700, 3300, 3500, 3400],
        fill: false,
        borderColor: "#9DB5F1",
        tension: 0.4,
      },
    ],
  };

  // Dummy Sales Overview Data
  const salesData = [
    {
      label: "Sales",
      value: "₹ 832",
      icon: <img src={SvgUtils.salesIcon} alt="Sales" width={32} height={32} />,
    },
    {
      label: "Revenue",
      value: "₹ 18,300",
      icon: (
        <img src={SvgUtils.revenueIcon} alt="Revenue" width={32} height={32} />
      ),
    },
    {
      label: "Profit",
      value: "₹ 868",
      icon: (
        <img src={SvgUtils.profitIcon} alt="Profit" width={32} height={32} />
      ),
    },
    {
      label: "Cost",
      value: "₹ 17,432",
      icon: <img src={SvgUtils.costIcon} alt="Cost" width={32} height={32} />,
    },
  ];
  // Dummy Purchase Overview Data
  const purchaseData = [
    {
      label: "Purchase",
      value: "₹ 832",
      icon: (
        <img
          src={SvgUtils.purchaseIcon}
          alt="Purchase"
          width={32}
          height={32}
        />
      ),
    },
    {
      label: "Cost",
      value: "₹ 18,300",
      icon: <img src={SvgUtils.costIcon} alt="Cost" width={32} height={32} />,
    },
    {
      label: "Cancel",
      value: "₹ 868",
      icon: (
        <img src={SvgUtils.cancelIcon} alt="Cancel" width={32} height={32} />
      ),
    },
    {
      label: "Return",
      value: "₹ 17,432",
      icon: (
        <img src={SvgUtils.profitIcon} alt="Return" width={32} height={32} />
      ),
    },
  ];

  // Dummy data for top selling stocks
  const topSellingStocks = [
    {
      id: 1,
      name: "Surf Excel",
      soldQuantity: 30,
      remainingQuantity: 12,
      price: "₹100",
    },
    {
      id: 2,
      name: "Rin",
      soldQuantity: 21,
      remainingQuantity: 15,
      price: "₹207",
    },
    {
      id: 3,
      name: "Parle G",
      soldQuantity: 19,
      remainingQuantity: 17,
      price: "₹105",
    },
  ];

  const lowStockItems = [
    {
      name: "Tata Salt",
      quantity: 10,
      image: SvgUtils.saltIcon,
    },
    {
      name: "Lays",
      quantity: 15,
      image: SvgUtils.laysIcon,
    },
    {
      name: "Lays",
      quantity: 15,
      image: SvgUtils.laysIcon,
    },
  ];

  const inventorySummary = [
    {
      icon: (
        <img
          src={SvgUtils.quantityIcon}
          alt="Quantity"
          width={32}
          height={32}
        />
      ),
      value: 868,
      label: "Quantity in Hand",
      bgColor: "#FFF4E5",
    },
    {
      icon: (
        <img
          src={SvgUtils.receivedIcon}
          alt="Received"
          width={32}
          height={32}
        />
      ),
      value: 200,
      label: "To be received",
      bgColor: "#F3F0FF",
    },
  ];

  const productSummary = [
    {
      icon: (
        <img src={SvgUtils.profileIcon} alt="Profile" width={32} height={32} />
      ),
      value: 31,
      label: "Number of Suppliers",
      bgColor: "#E5F6FD",
    },
    {
      icon: (
        <img
          src={SvgUtils.categoriesIcon}
          alt="Categories"
          width={32}
          height={32}
        />
      ),
      value: 21,
      label: "Number of Categories",
      bgColor: "#F3F0FF",
    },
  ];

  return (
    <Box
      sx={{
        px: isMobile ? 1 : 3,
        py: 7,
      }}
    >
      <Box>
        {/* Sales Overview - Inventory Summary*/}
        <Box
          mb={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <OverviewCard data={salesData} title="Sales Overview" />
          <InventorySummaryCard
            title="Inventory Summary"
            data={inventorySummary}
          />
        </Box>

        {/* Purchase Overview  - Product Summary*/}
        <Box
          mb={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <OverviewCard data={purchaseData} title="Purchase Overview" />
          <InventorySummaryCard title="Product Summary" data={productSummary} />
        </Box>

        {/* Sales & Purchase Overview - Order Summary*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <SalesAndPurchaseOverview
            title="Sales And Purchase"
            months={months}
            purchaseDataForCharts={purchaseDataForCharts}
            salesDataForCharts={salesDataForCharts}
          ></SalesAndPurchaseOverview>

          {/* Line Chart For Order Summary */}
          <OrderSummaryChart
            title={"Order Summary"}
            lineChartData={lineChartData}
          />
        </Box>

        {/* Inventory Summary - Low Quantity Stock */}
        <Box
          mb={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TopSellingStock
            title={"Top Selling Stock"}
            topSellingItem={topSellingStocks}
          />
          <LowQuantityStock
            title={"Low Quantity Stock"}
            stockItem={lowStockItems}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

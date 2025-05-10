import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Dashboard from "./screens/Dashboard.jsx";
import theme from "./themes/Themes.jsx";
import Sidebar from "./components/Sidebar.jsx";
import "@fontsource/inter";
import ReportsScreen from "./screens/Reports.jsx";
import InventoryScreen from "./screens/Inventory.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<InventoryScreen />} />
              <Route path="/reports" element={<ReportsScreen />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

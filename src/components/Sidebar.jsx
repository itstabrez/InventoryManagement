import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
  { text: "Reports", icon: <BarChartIcon />, path: "/reports" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <Header />

      <Toolbar />
      <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => navigate(item.path)}
              >
                <ListItemButton
                  selected={isActive}
                  sx={{
                    color: isActive ? "primary.main" : "text.primary",
                    "& .MuiListItemIcon-root": {
                      color: isActive ? "primary.main" : "text.primary",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;

import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SvgUtils from "../utils/SvgUtils";

const Header = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "background.colorWhite",
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side Logo - Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={SvgUtils.kanbanLogo}
              alt="Kanban"
              width={36}
              height={36}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              KANBAN
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              borderRadius: 2,
              border: "1px solid #e5e7eb",
              padding: "4px 12px",
              width: 300,
            }}
          >
            <SearchIcon sx={{ color: "#9ca3af", mr: 1 }} />
            <InputBase
              placeholder="Search product, supplier, order"
              sx={{ flex: 1, color: theme.palette.text.searchBarText }}
            />
          </Box>
        </Box>

        {/* Right Side: Notifications + Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <NotificationsNoneIcon sx={{ color: "#6b7280" }} />
          </IconButton>
          <Avatar
            alt="User"
            src="https://media.licdn.com/dms/image/v2/D5603AQHI4xgdNnGO6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729934236257?e=1752105600&v=beta&t=bnbSR1QoULJi0kKfz_MViNuv_GLK3ilwKK0yHJjEfxs"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

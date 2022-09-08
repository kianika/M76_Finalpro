import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function AdminAppBarDesktop() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
  };

  return (
    <AppbarContainer>
      <Link to="/" style={linkStyle}>
        <AppbarHeader variant="h4">Mind Style</AppbarHeader>
      </Link>
      <MyList type="row">
        <Link to="/admin/orders" style={linkStyle}>
          Orders
        </Link>
        <Link to="/admin/inventory" style={linkStyle}>
          Inventory
        </Link>
        <Link to="/admin" style={linkStyle}>
          Products
        </Link>
      </MyList>
    </AppbarContainer>
  );
}

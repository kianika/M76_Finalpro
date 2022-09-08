import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, InList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";

export default function Actions({ matches }) {

  const Component =  ActionIconsContainerDesktop;

  return (
    <Component>
      <InList type="row">
        <Link to="/ShoppingCart">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link to="/login">
             <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
            Admin
          </ListItemIcon>
        </ListItemButton>
        </Link>
        
      </InList>
    </Component>
  );
}
import { IconButton, List, Typography, Link } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
import { textPopUpTop } from "../../animations";

export const AppbarContainer = styled(Box)(() => ({    
    display: 'flex',
    marginTop: 1,
    justifyContent: 'center',
  alignItems: 'center',
    padding: '1px 8px'
}));

export const AppbarHeader = styled(Typography)(() => ({
  paddingLeft: "0.6em",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
  "&:hover": {
    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  paddingRight: "0.6em",
  display: 'flex',
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: 'center',
  gap: '120px',
  alignItems: "center" ,
  marginRight: '150px'
}));

export const InList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: 'end',
  alignItems: "center"
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));
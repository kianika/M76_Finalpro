import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
container:{
  backgroundColor: "#66CDAA"
},
  navlinks: {
    
    display: "flex",
  },
 logo: {
  display: "flex",
    flexGrow: "1",
    cursor: "pointer",
   justifyContent: "end"
  },
  icon: {
   marginLeft: "10px"
  } ,
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.container}>
      <CssBaseline />
      <Toolbar>
       
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
            <HomeIcon className={classes.icon}/>
            </Link>
            <Link to="/shoppingCart" className={classes.link}>
              سبد خرید
              <ShoppingBasketIcon className={classes.icon} />
              </Link>
            <Link to="/admin" className={classes.link}>
             مدیریت
            </Link>
           
          </div>
          <Typography variant="h4" className={classes.logo}>
          کتابدار
       <MenuBookIcon sx={{ fontSize: "35px" }}  className = {classes.icon}/> </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexDirection: "column",
  width: "14em",
  height: "24em",
  padding: "0"
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  textAlign:"center",
  width: "80%",
  height: "58%",
  size: "covered",
  background: Colors.light_gray,
  transition: ".3s ease-in-out",
  "&:hover" : {
    width: "110%",
    height: "64%"
  },
  [theme.breakpoints.down("lg")]: {
    width: "12em",
    height: "16em",
    
  },
  [theme.breakpoints.down("md")]: {
    width: "16em",
    height: "18em",
    
  },
  [theme.breakpoints.down("xs")]: {
    width: "10em",
    height: "8em",
    margin:"0",
    padding:"0"
  }
}));



export const ProductContent = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    height: "33%",
    width: "80%"
  }));

  export const ShoppingButton = styled(Button)(({ theme }) => ({
    
  }));

   export const ProductDetailContainer = styled(Box)(({  theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    // backgroundImage: `url(/images/banner/banner.png)`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
  }));

  export const ProductDetailContent = styled(Box)(({  theme }) => ({
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      alignItems: "center",
    }
  }));
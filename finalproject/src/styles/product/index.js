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
  height: "30em",
  padding: "0"
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  
  width: "100%",
  height: "58%",
  size: "covered",
  background: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    width: "16em",
    height: "18em",
    
  },
  [theme.breakpoints.down("xs")]: {
    width: "18em",
    height: "20em",
    margin:"0",
    padding:"0"
  }
}));



export const ProductContent = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    height: "33%"
  }));

  export const ShoppingButton = styled(Button)(({ theme }) => ({
    
  }));
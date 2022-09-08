import { Grid } from "@mui/material";
import ProductGrid from "./ProductGrid";

import React from 'react'
import { Colors } from "../../../styles/theme";

export default function GridContainer({products, id }) {

     

  return (
     <Grid  container
     spacing={{ xs: 2, sm: 2, md: 3, lg: 0 }}
    justifyContent="center"
    display="flex"
    width="100%"
    
    
    sx={{ backgroundColor: Colors.light_gray, py:"0"}}
  
    >
        {products
          .filter((item) => item.category == id)
          .slice(0, 6)
          .map((product) => (
            <ProductGrid product = {product}/>
          ))}
        
      </Grid>
  )
}

import { Grid } from "@mui/material";
import ProductGrid from "./ProductGrid";

import React from 'react'
import { Colors } from "../../../styles/theme";

export default function GridContainer({products, id }) {

     

  return (
     <Grid  container
     spacing={{ xs: 2, sm: 10, md: 6, lg: 4 }}
    justifyContent="start"
    display="flex"
    paddingRight={20}
    paddingLeft={20}
    width="80%"
    columns={{ xs: 1, sm: 2, md: 3 }}
    
    sx={{backgroundColor: Colors.light_gray}}
  
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

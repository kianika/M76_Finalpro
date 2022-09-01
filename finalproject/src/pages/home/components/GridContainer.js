import { Grid } from "@material-ui/core";
import ProductGrid from "./ProductGrid";

import React from 'react'

export default function GridContainer({products, setName}) {

     

  return (
     <Grid  container
    spacing={3}
    justifyContent="center"
    sx={{ margin: `20px 4px 10px 4px` }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    >
        {products
          .filter((item) => item.category == 1)
          .slice(0, 6)
          .map((product) => (
            <ProductGrid product = {product} setName = {setName}/>
          ))}
        
      </Grid>
  )
}

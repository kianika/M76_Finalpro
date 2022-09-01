import React from 'react';
import ProductCard from "./ProductCard";
import { Grid } from '@material-ui/core';



export default function ProductGrid({setName, product}) {
    setName(product.category);
  return (
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
        <ProductCard product = {product}  />
    </Grid>
  )
}

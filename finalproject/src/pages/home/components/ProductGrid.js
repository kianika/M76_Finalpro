import React from 'react';
import ProductCard from "./ProductCard";
import { Grid } from '@mui/material';
import { Colors } from '../../../styles/theme';



export default function ProductGrid({product}) {
  return (
    <Grid item key={product.id} xs={12} sm={6} md={4} display="flex" flexDirection={'column'} alignItems={"center"} justifyContent={'center'} sx={{py:"0"}}>
        <ProductCard product = {product}  />
    </Grid>
  )
}

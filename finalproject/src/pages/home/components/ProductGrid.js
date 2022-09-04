import React from 'react';
import ProductCard from "./ProductCard";
import { Grid } from '@mui/material';
import { Colors } from '../../../styles/theme';



export default function ProductGrid({product}) {
  return (
    <Grid item key={product.id} xs={1} sm={1} md={1} display="flex" flexDirection={'column'} alignItems={"center"} justifyContent={'center'} my={3}>
        <ProductCard product = {product}  />
    </Grid>
  )
}

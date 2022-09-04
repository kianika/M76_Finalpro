import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Product, ProductImage } from '../../../styles/product';
import { Box } from '@mui/material';
import { ProductContent } from '../../../styles/product';
import { Colors } from '../../../styles/theme';

export default function ProductCard({product}) {

   
    
  return (
    <Product>
     
      
          <ProductImage src = {product.image} />
          <ProductContent>
          <Typography gutterBottom  sx={{ fontWeight: 'bold', fontSize: "16px" }}  component="div">
           {product.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
           by {product.author}
          </Typography>
          <Typography variant="body2" color="text.secondary" my={2}>
           {product.price} $ 
         
          </Typography>
          
          </ProductContent>
          <Button size="large"  startIcon={<ShoppingBasketIcon/>} variant="contained"  fullWidth sx={{color:Colors.primary}}>
         Add to basket  
        </Button>
     
    </Product>
  )
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function ProductCard({product}) {

   
    
  return (
    <Card sx={{ width: 270, height: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" sx={{ fontWeight: 'bold' }}  component="div">
           {product.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
           by {product.author}
          </Typography>
          <Typography variant="body2" color="text.secondary" my={2}>
           {product.price} $ <Button size="small" color="primary" sx={{marginLeft:"34px"}}>
         Add to basket  
          <ShoppingBasketIcon variant="h4" sx={{marginLeft:"10px"}} />
        </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
  )
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from "@material-ui/core";
import { Container } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { fetchCategoriesProducts } from '../../redux/feature/ProductsSlice';
import { useState } from 'react';
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"






function Categories() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [page, setPage] = useState();

  let { id } = useParams();

  useEffect(() => {
    let url = new URL('http://localhost:3002/products?');
    let params = new URLSearchParams(url.search);
    params.set('category', id);
    params.set('_page', page);
    params.set('_limit', 5);
    params.toString();
    console.log(id);
    dispatch(fetchCategoriesProducts(id));
  }, [dispatch]);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 100px",
    borderRadius: "10px",
    borderColor: "blue"
  }

  
    return (
      
      <Container>
      <Typography></Typography>
      <Box style={style}>
        <Typography variant="h2"></Typography>
       
        <Grid  container
    spacing={3}
    justifyContent="center"
    sx={{ margin: `20px 4px 10px 4px` }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    >
        {products
          .filter((item) => item.category == id)
          .slice(0, 6)
          .map((product) => (
            <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
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
         
        
      </Grid>
       ))}
       </Grid>
       
      </Box>

      <Pagination
          count={2}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />

    </Container>
    );
  }
  
  export default Categories;
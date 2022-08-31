import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { Grid }  from "@material-ui/core";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomeProducts } from "../../redux/feature/ProductsSlice";
import { Dispatch } from "react";



function Home() {
  const dispatch = useDispatch();
  
  const categories = ["kids"];

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchHomeProducts());
  }, [])

  const renderProducts = products.filter(item => item.category == "kids").map((product) => 
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
    <Card>
<p>{product.name}</p>
    </Card>
    </Grid>
  );
 
  return (
   
    <Container>
    <Grid        
      container
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      sx={{ margin: `20px 4px 10px 4px` }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {renderProducts}
    </Grid>
  </Container>
    
  );
}

export default Home;

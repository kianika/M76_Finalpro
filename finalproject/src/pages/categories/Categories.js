import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { fetchCategoriesProducts } from "../../redux/feature/ProductsSlice";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ProductContent, ProductImage, Product } from "../../styles/product";
import Sidebar from "./components/Sidebar";

function Categories() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [page, setPage] = useState();

  let { id } = useParams();

  useEffect(() => {
    let url = new URL("http://localhost:3002/products?");
    let params = new URLSearchParams(url.search);
    params.set("category", id);
    params.set("_page", page);
    params.set("_limit", 5);
    params.toString();
    console.log(id);
    dispatch(fetchCategoriesProducts(id));
  }, [dispatch]);

  const style = {
    display: "flex",
    flexDirection: "center",
  };

  return (
    <Container>
      <Typography></Typography>
      <Box style={style}>
        <Box
          flex={1}
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Sidebar />
        </Box>

        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}
          sx={{
            flex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {products
            .filter((item) => item.category == id)
            .slice(0, 6)
            .map((product) => (
              <Link to={`../../product/${product.id}`} style={{textDecoration:"none"}}>
                <Grid
                  item
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  display="flex"
                  flexDirection={"column"}
                  alignItems="start"
                  justifyContent="center"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      py: 2,
                    }}
                  >
                    <img
                      src={product.image}
                      style={{ width: "150px", height: "180px" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                    }}
                  >
                    <Typography
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        width: "240px",
                        height: "36px"
                      }}
                      component="div"
                    >
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      by {product.author}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={1}
                    >
                      {product.price} $
                    </Typography>
                  </Box>
                </Grid>
              </Link>
            ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Pagination
          count={2}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
}

export default Categories;

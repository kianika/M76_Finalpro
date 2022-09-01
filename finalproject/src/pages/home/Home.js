import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { Grid } from "@material-ui/core";
import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomeProducts } from "../../redux/feature/ProductsSlice";
import { Dispatch } from "react";
import GridContainer from "./components/GridContainer";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();

  const categories = [{category: 1, name: "kids" }];

  const products = useSelector((state) => state.products.products);
  const [name, setName] = useState();

  useEffect(() => {
    dispatch(fetchHomeProducts());
  }, []);


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
      <Typography><Link to="/categories">Categories</Link></Typography>
      <Box style={style}>
        <Typography variant="h2">{name}</Typography>
       
            <GridContainer
              products={products}
              setName={setName}
              categories={categories}
            />
       
      </Box>
    </Container>
  );
}

export default Home;

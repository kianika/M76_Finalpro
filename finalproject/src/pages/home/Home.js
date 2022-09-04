import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import * as React from "react";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchCategoriesProducts,
  fetchHomeProducts,
} from "../../redux/feature/ProductsSlice";
import { useState } from "react";
import GridContainer from "./components/GridContainer";
import { Link } from "react-router-dom";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { fetchCategory } from "../../redux/feature/CategorySlice";
import Banner from "./components/Banner";

function Home() {
  const dispatch = useDispatch();

  const [list, setList] = useState();

  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(fetchHomeProducts());
    dispatch(fetchCategory());
  }, []);

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <Box style={style}>
      <Banner />
      {categories.map((item) => (
        <Box style={style}>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/categories/${item.id}`,
              state: { id: item.id }, // your data array of objects
            }}
          >
           
            <Typography variant="h4" marginBottom={6} marginTop={2} color={"gray"} >
              <ChildCareIcon />
              {item.name}
            </Typography>
          </Link>
          <GridContainer products={products} id={item.id}  />
        </Box>
      ))}
    </Box>
  );
}

export default Home;

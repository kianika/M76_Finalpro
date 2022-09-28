import { Divider, Stack, Typography } from "@mui/material";
import { fetchSingleProducts } from "../../redux/feature/ProductsSlice";
import { Container } from "@mui/material";
import { Box, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { DialogContent } from "@mui/material";
import { useParams } from "react-router-dom";
import IncDec from "../../components/incdec";
import { styled } from "@mui/material";
import theme from "../../styles/theme";

function Product() {
  const DetailContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    background: Colors.light_gray,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "wrap",
    },
  }));

  const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
  }));

  const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      flex: 1,
      alignItems: "center",
    },
  }));

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.products);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(fetchSingleProducts({ id }));
  }, []);

  const addToCart = (id) => {
    const clickedItem = product[0];
    const Basket = JSON.parse(localStorage.getItem('basket')) ?? [] //
    localStorage.setItem('basket', JSON.stringify([...Basket, ...clickedItem]))
  }

  return (
    <Container>
      <DetailContainer direction={"row"} spacing={2} display={"flex"}>
        <Box>
          <img src={product[0].image}></img>
        </Box>
        <Box flex={3}>
          <DialogContent>
            <ProductDetailWrapper display={"flex"} flexDirection={"column"}>
              <ProductDetailInfoWrapper>
                <Typography sx={{ lineHeight: 2 }} variant="h4">
                  {product[0].name}
                </Typography>
                <Typography variant="subtitle">
                  Availability: {product[0].quantity} in stock
                </Typography>
                <Typography variant="subtitle">
                  Author: {product[0].author}{" "}
                </Typography>

                <Typography variant="body">{product[0].description}</Typography>
                <Box
                  sx={{ mt: 4 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <IncDec count={product[0].quantity} />
                  <Button variant="contained">Add to Cart</Button>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ mt: 4, color: Colors.light }}
                >
                  <FavoriteIcon sx={{ mr: 2 }} />
                  Add to wishlist
                </Box>
              </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
          </DialogContent>
        </Box>
      </DetailContainer>
    </Container>
  );
}

export default Product;

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/ProductsSlice";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import { Container } from "@mui/system";
import { Colors } from "../../styles/theme";


const Inventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);

  let [page, setPage] = useState(1);
  const count = Math.ceil(total / 5);

  useEffect(() => {
    dispatch(fetchProducts({ page }));
  }, [page, dispatch]);



  return (
    <React.Fragment>
      <Container>
        <Stack direction="row" spacing={99} mt={4} my={4} mx={3}>
        <Button variant="contained"
            sx={{ backgroundColor: Colors.primary, color: Colors.white }}>
          ذخیره
        </Button>
        <Typography variant="h5">  Inventory Mnagement  </Typography>
      </Stack>
<Container sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
      <TableContainer component={Paper}>
      <Table sx={{ border: "2px solid grey" }}>
            <TableHead
              sx={{
                border: "2px solid grey",
                backgroundColor: Colors.secondary,
              }}
            >
            <TableRow>
              <TableCell align="left">Item</TableCell>
              <TableCell align="left"> Price</TableCell>
              <TableCell align="left"> Inventory</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*  {products.map((product) => (
                    <ListItem key={product.id}>
                        <ListItemText>{product.name}</ListItemText>
                        </ListItem>
                ))} */}

            {products.map((v) => (
              <TableRow
                key={v.id}>
                <TableCell align="left">{v.name}</TableCell>
                <TableCell align="left">{v.price}</TableCell>
                <TableCell align="left">{v.quantity}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={(e, value) => setPage(value)}
      />
      </Container>
    </React.Fragment>
    
  );
};
export default Inventory;

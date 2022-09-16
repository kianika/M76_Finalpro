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
import { TextField } from "@mui/material";
import instance from "../../api/http";

const Inventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const objList = [];

  let [page, setPage] = useState(1);
  const [goods, setGoods] = useState([]);
  const [prices, setPrices] = useState([]);
  const count = Math.ceil(total / 5);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState([]);

  const BASE_URL = "http://localhost:3002/products";

  useEffect(() => {
    dispatch(fetchProducts({ page }));
    escCancel();
    setState([]);
  }, [page, dispatch, loading]);

  const Edit = (e, name, id) => {
    const l = e.target.name;
    console.log(l);
    if (name === "price") {
      setPrices([...prices, id]);
    } else {
      setGoods([...goods, id]);
    }
  };
  const escCancel = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setPrices([]);
        setGoods([]);
        setState([]);

        setLoading(!loading);
      }
    });
  };

  const handleChange = (e, id) => {
    const name = e.target.name;
    const value = e.target.value;
    const item = state.find((item) => item.id === id);
    if (item) {
      item[[name]] = value;
    } else {
      const obj = { id: id, [name]: value };
      setState([...state, obj]);
    }

    console.log(state);
  };

  const handleEdit = () => {
    //console.log(result);
    state.map(({ id, quantity }) =>
      instance
        .patch(
          `${BASE_URL}/${id}`,
          { edited_field: "quantity", quantity: quantity },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // Code
          console.log(error);
          setLoading(!loading);
        })
    );

    state.map(({ id, price }) =>
      instance
        .patch(
          `${BASE_URL}/${id}`,
          { edited_field: "price", price: price },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response);
          setLoading(!loading);
          
        })
        .catch((error) => {
          // Code
          console.log(error);
        })
    );
   
    setPrices([]);
    setGoods([]);
  };

  return (
    <React.Fragment>
      <Container>
        <Stack direction="row" spacing={99} mt={4} my={4} mx={3}>
          <Button
            variant="contained"
            sx={{ backgroundColor: Colors.primary, color: Colors.white }}
            onClick={() => handleEdit()}
          >
            Save
          </Button>
          <Typography variant="h5"> Inventory Mnagement </Typography>
        </Stack>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                {products.map((v, index) => (
                  <TableRow key={v.id}>
                    <TableCell align="left">{v.name}</TableCell>
                    <TableCell
                      align="left"
                      onClick={(e) => Edit(e, "price", v.id)}
                    >
                      {prices.includes(v.id) ? (
                        <TextField
                          defaultValue={v.price}
                          id={v.id}
                          onChange={(event) => handleChange(event, v.id)}
                          name="price"
                        />
                      ) : (
                        <Typography>{v.price}</Typography>
                      )}
                    </TableCell>
                    <TableCell
                      align="left"
                      id={v.id}
                      onClick={(e) => Edit(e, "quantity", v.id)}
                    >
                      {goods.includes(v.id) ? (
                        <TextField
                          id={v.id}
                          name="quantity"
                          defaultValue={v.quantity}
                          onChange={(e) => handleChange(e, v.id)}
                        />
                      ) : (
                        <Typography>{v.quantity}</Typography>
                      )}
                    </TableCell>
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
          sx={{ my: 5 }}
          onChange={(e, value) => setPage(value)}
        />
      </Container>
    </React.Fragment>
  );
};

export default Inventory;

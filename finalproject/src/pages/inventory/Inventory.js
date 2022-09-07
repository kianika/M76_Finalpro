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
import { EditText, EditTextarea } from 'react-edit-text';
import { editQuantity } from "../../redux/feature/ProductsSlice";
import { TextField } from "@mui/material";
import axios from "axios";
import instance from "../../api/http";


const Inventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const [Ptag, setPtag] = useState(true);
  const length = products.length;
  const [price, setPrice] = useState();
  let [page, setPage] = useState(1);
  const [tempId, setTempId] = useState()
  const [tempPrice, setTempPrice] = useState()
  const [temptQuantity, setTempQuantity] = useState()
  const [goods, setGoods] = useState([])
  const [edit, setEdit] = useState(false)
  const [xxId, setXxId] = useState({})
  const count = Math.ceil(total / 5);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:3002/products";

  useEffect(() => {
    dispatch(fetchProducts({ page }));
  }, [page, dispatch, loading]);

  const handleEditPriceAndQuantity = (book) => {
    
   
    
 setEdit("true");
    setTempId(book.id)
    setXxId({
      ...xxId,
      [book.id]: {id: tempId, price: tempPrice, quantity: temptQuantity },
    })
    console.log(xxId)
  }

const handleEdit = () => {


  
    // Object.values(xxId[i])[2]
  for (const i in xxId){

    const id = Object.values(xxId[i])[0];
    const value = Object.values(xxId[i])[2];
    const pricevalue = Object.values(xxId[i])[1];


    instance.patch(`${BASE_URL}/${id}`,
            { "edited_field": "quantity", "quantity": value },
            { headers: { 'Content-Type': 'application/json' }, }
        ).then((response) => {
           console.log(response);
        }).catch((error) => {
            // Code
            console.log(error);
        })

        instance.patch(`${BASE_URL}/${id}`,
        { "edited_field": "price", "price": pricevalue },
        { headers: { 'Content-Type': 'application/json' }, }
    ).then((response) => {
       console.log(response);
    }).catch((error) => {
        // Code
        console.log(error);
    })

    

      
       
  }
  setLoading(!loading);
 }


 
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
                {/*  {products.map((product) => (
                    <ListItem key={product.id}>
                        <ListItemText>{product.name}</ListItemText>
                        </ListItem>
                ))} */}

                {products.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell align="left">
                      {v.name}
                    </TableCell>
                    <TableCell align="left"  onClick={() => handleEditPriceAndQuantity(v)}>
                    
                      {edit && v.id === tempId ? (
                        <TextField
                          type="number"
                          name="price"
                          defaultValue={v.price}
                          onChange={(e) => setTempPrice(e.target.value)}
                        />
                      ) : (
                        <Typography component="p">
                          {v.price}
                        </Typography>
                      )}
                  
                    </TableCell>
                    <TableCell align="left">    <Typography
                      component="div"
                      onClick={() => handleEditPriceAndQuantity(v)}
                    >
                      {edit && v.id === tempId ? (
                        <TextField
                          type="number"
                          name="quantity"
                          defaultValue={v.quantity}
                          onChange={
                            (e) => setTempQuantity(e.target.value)
                            // onChange={(e) => setTempQuantity(e.target.value)
                          }
                        />
                      ) : (
                        <Typography component="p">
                          {v.quantity}
                        </Typography>
                      )}
                    </Typography></TableCell>
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
          sx={{ my: 5 }}
        />
      </Container>
    </React.Fragment>
  );
};
export default Inventory;

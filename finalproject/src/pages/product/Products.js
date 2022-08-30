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
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import { Colors } from "../../styles/theme";
import { fetchCategory } from "../../redux/feature/CategorySlice";
import Modal from "./components/Modal";
import { deleteProducts } from "../../redux/feature/ProductsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const total = useSelector((state) => state.products.total);
  const categories = useSelector((state) => state.categories.categories);
 const [loading, setLoading] = useState(false);
 const [Info, setInfo] = useState();
 const [edit, setEdit] = useState(false);
  
  let [page, setPage] = useState(1);
  const count = Math.ceil(total / 5);

  
  useEffect(() => {
    dispatch(fetchProducts({ page }));
    
  }, [page, dispatch, loading]);

 
    
    useEffect(() => {
      dispatch(fetchCategory());
    }, []);
  


  //Add new product

  const [add, setAdd] = useState()
  const [open, setOpen] = useState(false);

  const handleEdit = (id) => {
    setOpen(true);
    setInfo(products.find((product) => product.id === id));
    setEdit(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
    setLoading(!loading);
  };

  return (
    <React.Fragment>
      <Container>
        <Stack direction="row" spacing={98} mt={4} my={4} className="header">
          <Button
            variant="contained"
            sx={{ backgroundColor: Colors.primary, color: Colors.white }}
            onClick = {() => setOpen(true)}
          >
            Add Item{" "}
          </Button>
          {open && (
                        <Modal  setOpen={setOpen} open={open} categories={categories} setLoading ={setLoading} loading = {loading} info={Info} setEdit={setEdit} edit={edit}/>
                      )}
          <Typography variant="h5"> Products Management</Typography>
        </Stack>

        <TableContainer>
          <Table sx={{ border: "2px solid grey" }}>
            <TableHead
              sx={{
                border: "2px solid grey",
                backgroundColor: Colors.secondary,
              }}
            >
              <TableRow>
                <TableCell align="left"> Image</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Category </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((v) => (
                <TableRow key={v.id}>
                  <TableCell align="left">
                    <Avatar
                      alt="The image"
                      src={v.image}
                      sx={{ width: 44, height: 54 }}
                      variant={"rounded"}
                    />
                  </TableCell>
                  {}
                  <TableCell align="left">{v.name}</TableCell>
                  <TableCell align="left">{categories.map((item) => {if (item.id == v.category){
                    return `${item.name}`
                  }})}</TableCell>
                  <TableCell align="left">
                    <Stack direction="row" spacing={5}>
                      <CreateIcon onClick={() => handleEdit(v.id)}/>
                      <DeleteIcon onClick={() => handleDelete(v.id)}/>
                    </Stack>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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

export default Products;

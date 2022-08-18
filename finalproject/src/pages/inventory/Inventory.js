import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../../store/Products";
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
import useProductsPagination from "../product/ProductsPagination";

const Inventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(loadproducts());
  }, [dispatch]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = useProductsPagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <React.Fragment>
      <Stack direction="row" spacing={130} mx={3} my={2} className="header">
        <Button variant="contained" color="success">
          ذخیره
        </Button>
        <Typography variant="h4">مدیریت موجودی و قیمت ها</Typography>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right"> موجودی</TableCell>
              <TableCell align="right"> قیمت</TableCell>
              <TableCell align="right">کالا</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*  {products.map((product) => (
                    <ListItem key={product.id}>
                        <ListItemText>{product.name}</ListItemText>
                        </ListItem>
                ))} */}

            {_DATA.currentData().map((v) => (
              <TableRow
                key={v.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right">{v.quantity}</TableCell>
                <TableCell align="right">{v.price}</TableCell>
                <TableCell align="right">{v.name}</TableCell>
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
        onChange={handleChange}
      />
    </React.Fragment>
  );
};
export default Inventory;

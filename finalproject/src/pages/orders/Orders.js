import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/feature/OrdersSlice"
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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import Modal from "./components/Modal"

const Orders = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.orders.orders);
  const total = useSelector((state) => state.orders.total);
  console.log(total);
  
 console.log(data);
  const [delivered, setDelivered] = useState(true);
  const [page, setPage] = useState(1);

 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const count = Math.ceil(total / 1);
  



  useEffect(() => {
    dispatch(fetchOrders({delivered, page}));
  }, [delivered, page, dispatch]);





  return (
    <React.Fragment>
      <Stack direction="row" spacing={130} mx={3} my={2} className="header">
        <FormControl component="fieldset">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="sent"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="sent"
              control={<Radio />}
              label="سفارش های تحویل شده"
              defaultChecked={true}
              onClick={() => {
                setDelivered(true);
              }}
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="سفارش های در انتظار ارسال"
              onClick={() => {
                setDelivered(false);
              }}
            />
          </RadioGroup>
        </FormControl>

        <Typography variant="h4">مدیریت سفارش ها</Typography>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> </TableCell>
              <TableCell align="center">زمان ثبت سفارش </TableCell>
              <TableCell align="center"> مجموع مبلغ</TableCell>
              <TableCell align="center">نام کاربر</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length &&
             data.map((v) => (
                <TableRow
                  key={v.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <Link href="#" onClick={handleOpen}>بررسی سفارش</Link>
                    <Modal item={v} open = {open} onClose={handleClose} />
          </TableCell>
                  <TableCell align="center">
                    {new Date(v.createdAt).getDay() +
                      "/" +
                      new Date(v.createdAt).getMonth() +
                      "/" +
                      new Date(v.createdAt).getFullYear()}
                  </TableCell>
                  <TableCell align="center">{v.prices}</TableCell>
                  <TableCell align="center">
                    {v.username + " " + v.lastname}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={count}
        size="large"
        page = {page}
        variant="outlined"
        shape="rounded"
        onChange={(e, value) => setPage(value)}
       
      />


    </React.Fragment>
  );
};

export default Orders;

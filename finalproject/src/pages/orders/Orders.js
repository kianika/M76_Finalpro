import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { loadorders } from "../../store/orders";
import { loadfilteredorders } from "../../store/filteredorders";
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

const Orders = () => {
  const dispatch = useDispatch();
  const filteredorders = useSelector((state) => state.filteredorders.list);
  const orders = useSelector((state) => state.orders.list);

  const [delivered, setDelivered] = useState(true);
  let [page, setPage] = useState(1);

  console.log(orders);
  

  useEffect(() => {
    dispatch(loadorders(delivered));
  }, [delivered, dispatch]);

  useEffect(() => {
    dispatch(loadfilteredorders(delivered, page));
  }, [delivered, page, dispatch]);

  let total = Math.ceil(orders.length / 5);
  console.log(total);

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
            {filteredorders.length &&
              filteredorders.map((v) => (
                <TableRow
                  key={v.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <Link href="#">بررسی سفارش</Link>
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
        count={total}
        size="large"
        variant="outlined"
        shape="rounded"
        onClick={(e) => setPage(e.target.textContent)}
      />
    </React.Fragment>
  );
};

export default Orders;

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { loadorders, loadproducts } from "../../store/Orders";
import { useEffect } from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import OrdersPagination from "./OrdersPagination";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  const sentOrders = orders.filter((item) => item.delivered == "true");
  const pendingOrders = orders.filter((item) => item.delivered == "false");

  const [checked, setChecked] = useState("");

  const radiohandleChange = (e) => {
    const { name, value } = e.target;
    setChecked(value);
  };

  useEffect(() => {
    dispatch(loadorders());
  }, [dispatch]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  let _DATA = 0;

  const count = Math.ceil(orders.length / PER_PAGE);
  if (checked == "sent") {
    _DATA = OrdersPagination(sentOrders, PER_PAGE);
    const count = Math.ceil(orders.length / PER_PAGE);
  } else {
    _DATA = OrdersPagination(pendingOrders, PER_PAGE);
  }

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <React.Fragment>
      <Stack direction="row" spacing={130} mx={3} my={2} className="header">
        <FormControl component="fieldset">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="pending"
            name="radio-buttons-group"
            onChange={radiohandleChange}
          >
            <FormControlLabel
              value="sent"
              control={<Radio />}
              label="سفارش های تحویل شده"
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="سفارش های در انتظار ارسال"
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

export default Orders;

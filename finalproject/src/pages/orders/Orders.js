import * as React from "react";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/feature/OrdersSlice";
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
import Modal from "./components/Modal";
import Container from "@mui/material/Container";
import { Colors } from "../../styles/theme";
import  { Button } from "@mui/material";

const Orders = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.orders.orders);
  const total = useSelector((state) => state.orders.total);
  
  const [delivered, setDelivered] = useState(true);
  const [page, setPage] = useState(1);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const [info, setInfo] = useState({}, false)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = (id) => {
    setOpen(true);
   
    setInfo(data.find((order) => order.id === id))
    
    }

  //const handleClose = () => setOpen(false);
  const count = Math.ceil(total / 5);

  useEffect(() => {
    dispatch(fetchOrders({ delivered, page }));
  }, [delivered, page, dispatch]);


  return (
    <React.Fragment>
      <Container>
        <Stack direction="row" spacing={84} mt={4} my={4} className="header">
          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="sent"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="sent"
                control={<Radio />}
                label="Delivered Items"
                defaultChecked={true}
                onClick={() => {
                  setDelivered(true);
                }}
              />
              <FormControlLabel
                value="pending"
                control={<Radio />}
                label="Pending Orders"
                onClick={() => {
                  setDelivered(false);
                }}
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="h4"> Orders Managemen</Typography>
        </Stack>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                border: "2px solid grey",
                backgroundColor: Colors.secondary,
              }}
            >
              <TableRow>
                <TableCell align="left"> User Name</TableCell>
                <TableCell align="left"> Total Price </TableCell>
                <TableCell align="left"> Purchase Date</TableCell>
                <TableCell align="left"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length &&
                data.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell align="left">
                      <Button  onClick={() => handleOpen(v.id)}>
                        View Order
                      </Button>
                    {open && (<Modal tempOrder = {info}   setOpen ={setOpen} open = {open}/>)}
                    </TableCell>
                    <TableCell align="left">
                      {new Date(v.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}
                    </TableCell>
                    <TableCell align="left">{v.prices}</TableCell>
                    <TableCell align="left">
                      {v.username + " " + v.lastname}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal tempOrder = {info} setOpen = {setOpen}  />
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

export default Orders;

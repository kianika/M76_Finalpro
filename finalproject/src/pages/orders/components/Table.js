import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@mui/material/Button";
import { editorders } from '../../../store/UpdateOrdersList';
import { useDispatch } from 'react-redux';
import { changeDelivered } from '../../../redux/feature/OrdersSlice';


export default function ProductTable({item}) {
    const products = [...item.products]

    const dispatch = useDispatch();
    const handleUpdate = (id) => {
      dispatch(changeDelivered(id))
    }
  
    
  return (
    <TableContainer>
    <Table aria-label="simple table" stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>نام کالا</TableCell>
          <TableCell align="right">قیمت</TableCell>
          <TableCell align="right">تعداد</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">
                {row.price}
            </TableCell>
            <TableCell align="right">
                {row.count}
            </TableCell>
          </TableRow>
        ))}
        <Button onClick={dispatch(handleUpdate)}>تحویل شد</Button>
      </TableBody>
    </Table>
  </TableContainer>
  )
}

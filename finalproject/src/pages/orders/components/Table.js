import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Colors } from "../../../styles/theme";


export default function ProductTable({tempOrder}) {
    const products = [...tempOrder.products]

   
    
  return (
    
    <Table >
      <TableHead
       sx={{
        border: "2px solid grey",
        backgroundColor: Colors.secondary,
      }}>
        <TableRow>
          <TableCell align="left">Count</TableCell>
          <TableCell align="left">Price</TableCell>
          <TableCell align="left">Product Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((row) => (
          <TableRow key={row.id}>
            <TableCell align='left'>
            {row.count}
            </TableCell>
            <TableCell align="left">
                {row.price}
            </TableCell>
            <TableCell align="left">
            {row.name}
            </TableCell>
          </TableRow>
        ))}
      
      </TableBody>
    </Table>
 
  )
}

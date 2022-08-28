import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Table from "./Table"
import { Stack } from "@mui/system";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

export default function Moodal({ item, open, onClose }) {
  console.log(item);
  return (
    <Modal open={open}>
      <Box sx={style}>
        <Box sx={{display:"flex", flexDirection: 'row-reverse'}}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h4">
          Order Review
        </Typography>

        <Grid container spacing={3} my={2}>
          <Grid item  xs={6} md={5} > Customer Name :
          </Grid>
          <Grid  item xs={6} md={7} textAlign= "left" >
          {item.username + " " + item.lastname}
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2}>
          <Grid item  xs={6} md={5}>
           
             Address :
           
          </Grid>
          <Grid  item xs={6} md={7} textAlign= "left">
          {item.address}
          </Grid>
        </Grid>
        <Grid container spacing={3} my={2}>
          <Grid item  xs={6} md={5}>
           
             Phone Number :
           
          </Grid>
          <Grid  item xs={6} md={7} textAlign= "left">
          {item.phone}
          </Grid>
        </Grid>
        <Grid container spacing={3} my={2}>
          <Grid item  xs={6} md={5}>
          
             Delivery Date :
           
          </Grid>
          <Grid  item xs={6} md={7} textAlign= "left">
          {new Date(item.expectAt).toLocaleDateString('fa-IR', options) }
          </Grid>
        </Grid>

        <Grid container spacing={3} my={2}>
          <Grid item  xs={6} md={5} textAlign= "left">
           
             Purchase Date :
           
          </Grid>
          <Grid  item xs={6} md={7}>
          {new Date(item.createdAt).toLocaleDateString('fa-IR', options)}
          </Grid>
        </Grid>

        <Table item = {item}/>
      </Box>
    </Modal>
  );
}

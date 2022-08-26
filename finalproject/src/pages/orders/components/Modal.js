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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>

        <Grid container spacing={3}>
          <Grid item  xs={6} md={8}>
           
              <paper>{item.username + " " + item.lastname}</paper>
           
          </Grid>
          <Grid  item xs={6} md={4}>
            : نام مشتری
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item  xs={6} md={8}>
           
              <paper>{item.address}</paper>
           
          </Grid>
          <Grid  item xs={6} md={4}>
            :  آدرس
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item  xs={6} md={8}>
           
              <paper>{item.phone}</paper>
           
          </Grid>
          <Grid  item xs={6} md={4}>
            :  تلفن
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item  xs={6} md={8}>
          
              <paper>{new Date(item.expectAt).toLocaleDateString('fa-IR', options) }</paper>
           
          </Grid>
          <Grid  item xs={6} md={4}>
            :  زمان تحویل
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item  xs={6} md={8}>
           
              <paper>{new Date(item.createdAt).toLocaleDateString('fa-IR', options)}</paper>
           
          </Grid>
          <Grid  item xs={6} md={4}>
            :  زمان سفارش
          </Grid>
        </Grid>
       
        <Typography>{item.username}</Typography>

        <Table item = {item}/>
      </Box>
    </Modal>
  );
}

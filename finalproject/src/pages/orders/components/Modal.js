import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Table from "./Table";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { changeDelivered } from "../../../redux/feature/OrdersSlice";
import { Colors } from "../../../styles/theme";
import { Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const options = { year: "numeric", month: "numeric", day: "numeric" };

export default function Moodal(props) {
  const {tempOrder, setOpen, open} = props;
  
  return (
    <Modal open = {open}>
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h4" mx= {2} my={1} >
          Order Review
        </Typography>
        <Divider orientation = "horizontal" flexItem />
<Box marginBottom={4} mx= {2}>
        <Grid container spacing={3} my={1}>
          <Grid item xs={6} md={5}>
            {" "}
            Customer Name :
          </Grid>
          <Grid item xs={6} md={7} textAlign="left">
            {tempOrder.username + " " + tempOrder.lastname}
          </Grid>
        </Grid>

        <Grid container spacing={3} my={1}>
          <Grid item xs={6} md={5}>
            Address :
          </Grid>
          <Grid item xs={6} md={7} textAlign="left">
            {tempOrder.address}
          </Grid>
        </Grid>
        <Grid container spacing={3} my={1}>
          <Grid item xs={6} md={5}>
            Phone Number :
          </Grid>
          <Grid item xs={6} md={7} textAlign="left">
            {tempOrder.phone}
          </Grid>
        </Grid>
        <Grid container spacing={3} my={1}>
          <Grid item xs={6} md={5}>
            Delivery Date :
          </Grid>
          <Grid item xs={6} md={7} textAlign="left">
            {new Date(tempOrder.expectAt).toLocaleDateString("en-US", options)}
          </Grid>
        </Grid>

        <Grid container spacing={3} my={1}>
          <Grid item xs={6} md={5} textAlign="left">
            Purchase Date :
          </Grid>
          <Grid item xs={6} md={7}>
            {new Date(tempOrder.createdAt).toLocaleDateString("en-US", options)}
          </Grid>
        </Grid>
        </Box>

        <Table tempOrder={tempOrder} sx={{ border: "2px solid grey"}} />
        <Box sx={{ textAlign: "center", my: 5 }}>
          <Button
            sx={{backgroundColor: Colors.primary, color: Colors.white}}
          >
            {" "}
            Delivered
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

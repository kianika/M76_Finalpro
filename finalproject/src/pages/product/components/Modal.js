import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Divider, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "@material-ui/core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch } from "react-redux";
import {
  createProducts,
  updateProducts,
} from "../../../redux/feature/ProductsSlice";


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
  zIndex: 1,
  p: 4,
  overflow: "scroll"
};

const iconstyle = {
  position: "absolute",
  top: "49%",
  zIndex: "1",
  left: "5%",
};

export default function Moodal(props) {
  const { setOpen, open, categories, setLoading, loading, info, setEdit, edit } = props;

  //Create New Product

  const dispatch = useDispatch();
 
  const [description, setDescription] = useState(edit ? info.description : "");

  const [name, setName] = useState(edit ? info.name : "");
  const [author, setAuthor] = useState(edit ? info.author : "");
  const [price, setPrice] = useState(edit ? info.price : "");
  const [quantity, setQuantity] = useState(edit ? info.quantity : "");
  const [category, setCategory] = useState(edit ? info.category : "");
  const [publisher, setPublisher] = useState(edit ? info.publisher : "");
  const [image, setSelectedImage] = useState(edit ? info.image : "");
  
  
  //Edit Product


  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      let pic = URL.createObjectURL(file);
      setSelectedImage(pic);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const makeNewProduct = () => {
    const newBook = {
      name,
      author,
      publisher,
      image,
      price,
      quantity,
      category: Number(category),
      description,
    };
    return newBook;
  };

  const EditNewProduct = () => {
    const newBook = {
      name,
      author,
      publisher,
      language: info.language,
      image,
      price,
      quantity,
      createdAt: info.createdAt,
      id: info.id,
      category: Number(category),
      subcategory: info.subcategory,
      description,
      
     
    };
    return newBook;
  };

  const handleAddNewBook = (e) => {
    e.preventDefault();
    if(edit){dispatch(updateProducts(EditNewProduct()));}
     else {
      dispatch(createProducts(makeNewProduct()));}

    setOpen(false);
    setLoading(!loading);
    

    console.log(makeNewProduct());
  };

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h4"
          mx={2}
          my={1}
        >
          Add - Edit Item
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Box sx={{ my: 2 }}>
          <form onSubmit={(e) => handleAddNewBook(e)}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Product Name"
                  name="name"
                  value={name}
                  size="small"
                  fullWidth="true"
                  margin="dense"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  label="Author"
                  value={author}
                  size="small"
                  fullWidth="true"
                  margin="dense"
                  onChange={(e) => setAuthor(e.target.value)}
                />
                    <Grid item xs={12}>
                  <TextField
                    label="Publisher"
                    name="name"
                    type="text"
                    size="small"
                    fullWidth="true"
                    margin="dense"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    size="small"
                    margin="dense"
                    fullWidth="true"
                  />
                </Grid>
            

                <Grid item xs={12}>
                  <TextField
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                    size="small"
                    label = "Quantity"
                    fullWidth="true"
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                  <Select
                   labelId="demo-simple-select-helper-label"
                  fullWidth="true"
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Category"
                    size="small"
                    margin="dense"
                    required
                  >
                    {categories.map((category) => (
                      <MenuItem value={category.id}>{category.name}</MenuItem>
                    ))}
                  </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item marginTop={2} xs={12}>
                  <TextField
                    sx={{ marginBottom: 2 }}
                    accept="image/*"
                    type="file"
                    fullWidth="true"
                    onChange={(e) => imageChange(e)}
                  />

                  {image && (
                    <div>
                      <IconButton
                        onClick={removeSelectedImage}
                        style={iconstyle}
                      >
                        <CloseIcon />
                      </IconButton>

                      <Avatar
                        alt="The image"
                        src={image}
                        sx={{ width: 44, height: 54 }}
                        variant={"rounded"}
                      />
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <CKEditor
                    editor={ClassicEditor}
                    sx={{ height: 80 }}
                    colomn="20"
                    initData="<p>Hello from CKEditor 4!</p>"
                    onChange={(e, editor) => setDescription(editor.getData())}
                    data={description}
                  />
                </Grid>
              </Grid>
              <Button type="submit">Save</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}

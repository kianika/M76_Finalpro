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
import { createProducts } from "../../../redux/feature/ProductsSlice";

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
  p: 2,
  zIndex: 1,
  overflow: "scroll",
};

const iconstyle = {
  position: "absolute",
  top: "49%",
  zIndex: "1",
  left: "5%",
};

export default function Moodal(props) {
  const { setOpen, open, categories, setLoading, loading } = props;

  const dispatch = useDispatch();
  const [description, setDescription] = useState([]);
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();
  const [createdAt, setcreatedAt] = useState();
  const [publisher, setPublisher] = useState();
  const [image, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
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
      createdAt,
      category: Number(category),
      description,
    };
    return newBook;
  };

  const handleAddNewBook = (e) => {
    e.preventDefault();
   
    dispatch(createProducts(makeNewProduct()));
    console.log(image);
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
        <Box marginBottom={4} mx={2}>
          <form onSubmit={(e) => handleAddNewBook(e)}>
            <Grid container>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Product Name"
                    name="name"
                    autoComplete="Product Name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="عنوان"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Price"
                    name="name"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    placeholder="price"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Publisher"
                    name="name"
                    autoComplete="Publisher"
                    autoFocus
                    type="text"
                    placeholder="publisher"
                    onChange={(e) => setPublisher(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Author"
                    name="name"
                    autoComplete="Author"
                    autoFocus
                    sx={{ padding: 0 }}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                    placeholder="quantity"
                  />
                </Grid>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    label="Category"
                  >
                    {categories.map((category) => (
                      <MenuItem value={category.id}>{category.name}</MenuItem>
                    ))}
                  </Select>

                  <Grid container>
              <Grid item marginTop={4}>
                <TextField
                  sx={{ marginBottom: 2 }}
                  accept="image/*"
                  type="file"
                  onChange={(e) => imageChange(e)}
                />

                {image && (
                  <div>
                    <IconButton onClick={removeSelectedImage} style={iconstyle}>
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
              </Grid>
                </FormControl>

                <CKEditor
                  editor={ClassicEditor}
                  sx={{ height: 50 }}
                  initData="<p>Hello from CKEditor 4!</p>"
                  onChange={(e, editor) => setDescription(editor.getData())}
                />
              </Grid>
            </Grid>
            <Button type="submit">Save</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          </form>

        
        </Box>
      </Box>
    </Modal>
  );
}

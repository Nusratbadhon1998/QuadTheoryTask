import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { imageUpload } from "../../utils/imageApi";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f99f1c",
    },
  },
});

export default function Form({ onAddItem }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button onClick={handleClickOpen}>
          AddMore
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: async (event) => {
              event.preventDefault();
              const form = event.target;
              const name = form.name.value;
              const price = form.price.value;
              const image = form.image.files[0];
              const isRecommend = form.recommend.value;
              const isPopular = form.popular.value;
              const ImageUrl = await imageUpload(image);
              console.log({ name, price, ImageUrl, isRecommend, isPopular });
              const newItem = { name, price, ImageUrl, isRecommend, isPopular };
              onAddItem(newItem);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add Your Delicious Item</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="text"
              fullWidth
              variant="standard"
            />

            <input type="file" name="image" id="" />
            <TextField
              autoFocus
              required
              margin="dense"
              id="recommend"
              name="recommend"
              label="IsRecommend"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="popular"
              name="popular"
              label="IsPopular"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}

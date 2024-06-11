import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { imageUpload } from "../../utils/imageApi";
import { useForm } from "react-hook-form";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f99f1c",
    },
  },
});

export default function Form({ onAddItem }) {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = async (data) => {
    const { name, price, image, recommend, popular } = data;
    const ImageUrl = await imageUpload(image[0]);
    const newItem = {
      Name: name,
      price: parseFloat(price),
      ImageUrl,
      IsRecommend: recommend === "yes",
      IsPopular: popular === "yes",
    };
    onAddItem(newItem);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Button onClick={handleClickOpen}>Add More</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Your Delicious Item</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="dense"
                label="Name"
                fullWidth
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                margin="dense"
                label="Price"
                type="number"
                fullWidth
                {...register("price", { required: "Price is required" })}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
              <input
                className="mt-4"
                type="file"
                {...register("image", { required: "Image is required" })}
              />
              {errors.image && (
                <p className="text-red-500 text-sm ">{errors.image.message}</p>
              )}
              <div>
                <label className="font-semibold">
                  Recommend:
                  <select
                    className="w-20"
                    {...register("recommend", { required: "Required" })}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="font-semibold">
                  Popular:
                  <select
                    className="w-20"
                    {...register("popular", { required: "Required" })}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Add</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </ThemeProvider>
  );
}

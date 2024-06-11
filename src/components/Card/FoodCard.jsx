import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function FoodCard({ data }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.ImageUrl}
          alt={data.Name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.Name}
          </Typography>
        </CardContent>
      </CardActionArea>
 
    </Card>
  );
}

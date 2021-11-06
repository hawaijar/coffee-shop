import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Product = ({ product }) => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            title={product.name}
            height="200"
            width={"300"}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography>${product.price}</Typography>
          <Button size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;

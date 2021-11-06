import React from "react";
import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

const Product = ({ product }) => {
  const discount = product.discount;
  return (
    <NextLink href={`/product/${product.slug}`} passHref>
      <Card>
        <CardHeader
          action={
            <div>
              {discount > 0 && (
                <Badge badgeContent={`-${discount}%`} color="secondary">
                  {" "}
                </Badge>
              )}
              <IconButton aria-label="settings"></IconButton>
            </div>
          }
          title="Shrimp"
          subheader="September 14, 2016"
        />
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
    </NextLink>
  );
};

export default Product;

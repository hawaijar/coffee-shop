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

  const getPrice = () => {
    let actualPrice = product.price;
    let discountedPrice;
    if (product.discount > 0) {
      discountedPrice = actualPrice - (actualPrice * product.discount) / 100;
      discountedPrice = discountedPrice.toFixed(2);
    }
    if (product.discount === 0) {
      return <Typography>${product.price}</Typography>;
    }
    return (
      <div className={"flex"}>
        <Typography className={"line-through text-gray-500"}>
          ${product.price}
        </Typography>
        <Typography className={"pl-1.5"}>${discountedPrice}</Typography>
      </div>
    );
  };

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
          title={product.name}
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
          {getPrice()}
          <Button size="small" color="primary" className={"pl-2"}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </NextLink>
  );
};

export default Product;

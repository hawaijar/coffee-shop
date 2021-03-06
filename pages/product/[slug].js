import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import data from "../../model/data";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import useStyles from "../../utils/styles";
import AddDeleteButton from "../../components/AddDeleteButton";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
  // const [itemCount, setItemCount] = useState(0);
  const { state } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  const alreadyAddedCount = product ? cartItems[product.id] : 0;

  const { dispatch } = useContext(Store);

  const onClickCartHandler = () => {
    // setItemCount(itemCount + 1);
    // console.log("product:", product);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  };

  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={"my-5"}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography
                component="h1"
                variant="h5"
                className={"underline font-bold"}
              >
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Discount:{" "}
                {product.discount > 0
                  ? `${product.discount}% off`
                  : "No discount"}
              </Typography>
            </ListItem>
            <ListItem className={"flex items-center"}>
              <Typography>Rating: </Typography>
              <Typography className={"mt-1"}>
                <Rating name="read-only" value={product.rating} readOnly />
              </Typography>
              <Typography>({product.numReviews} reviews)</Typography>
            </ListItem>
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                {!alreadyAddedCount ? (
                  <Button
                    onClick={onClickCartHandler}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Add to cart
                  </Button>
                ) : (
                  <AddDeleteButton
                    itemCount={alreadyAddedCount}
                    // setItemCount={setItemCount}
                    product={product}
                  />
                )}
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

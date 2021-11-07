import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import { calculateTotalPrice } from "../utils/util";
import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Button,
  Card,
  List,
  ListItem,
} from "@mui/material";
import { useRouter } from "next/router";

function CartScreen({ products }) {
  products = products || [];
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const router = useRouter();

  let productItems = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p.id === +id);
    if (product) {
      acc.push(product);
    }
    return acc;
  }, []);
  productItems = productItems.filter((item) => cartItems[item.id] > 0);
  // console.log("cartItems:", cartItems);
  // console.log("productItems:", productItems);
  // console.log("products:", products);

  // calculateTotalPrice(products, cartItems);

  const priceDetails = calculateTotalPrice(products, cartItems);

  const removeItemType = (id) => {
    dispatch({
      type: "CART_REMOVE_TYPE",
      payload: { id },
    });
  };

  const checkoutHandler = (cartItems) => {
    console.log("cartItems:", cartItems);
    router.push({
      pathname: "/order",
    });
  };

  return (
    <Layout title="Shopping Cart">
      <Typography component="h3" variant="h3">
        Shopping Cart
      </Typography>
      {productItems.length === 0 ? (
        <div>
          Cart is empty. <NextLink href="/">Go shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Original Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            />
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">{cartItems[item.id]}</TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemType(item.id)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h4">
                    Subtotal (
                    {Object.values(cartItems).reduce((a, c) => a + c, 0)} items)
                    : {priceDetails.totalBill}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => checkoutHandler(cartItems)}
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3000/api/products");
  const products = await data.json();
  return {
    props: {
      products: products,
    },
  };
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });

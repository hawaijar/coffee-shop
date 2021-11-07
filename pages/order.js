import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import { calculateTotalPrice } from "../utils/util";
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import Image from "next/image";

function OrderScreen({ products }) {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const priceDetails = calculateTotalPrice(products, cartItems);

  console.log("priceDetails:", priceDetails);

  console.log("cartItems:", cartItems);

  const { selectedCombos, combosFromIndividualItems, individualItems } =
    priceDetails;

  let totalWithoutTax = 0;

  const getPriceAfterDiscount = (price, discount, count) => {
    let singleDiscount = (discount / 100) * price;
    if (discount > 0) {
      singleDiscount = singleDiscount.toFixed(2);
    }
    let totalDiscount = singleDiscount * count;
    totalWithoutTax += price * count - totalDiscount;
    return `$${price * count - totalDiscount}`;
  };

  const getItems = (items) => {
    if (items.length === 0) return null;
    return items.map((item) => (
      <TableRow key={item.product.id}>
        <TableCell>
          <Image
            src={item.product.image}
            alt={item.product.name}
            width={50}
            height={50}
          />
          <Typography>{item.product.name}</Typography>
        </TableCell>
        <TableCell align="right">{item.count}</TableCell>
        <TableCell align="right">
          {getPriceAfterDiscount(
            item.product.price,
            item.product.discount,
            item.count
          )}
        </TableCell>
      </TableRow>
    ));
  };

  const getTotalTax = () => {
    return ((5 / 100) * totalWithoutTax).toFixed(2);
  };

  const getTotalBill = () => {
    return (+totalWithoutTax + +getTotalTax()).toFixed(2);
  };

  return (
    <Layout title="Shopping Cart">
      <Typography component="h3" variant="h3">
        Order Summary
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price(after Discount)</TableCell>
                </TableRow>
                {getItems(selectedCombos)}
                {getItems(combosFromIndividualItems)}
                {getItems(individualItems)}
                <TableRow>
                  <TableCell>{""}</TableCell>
                  <TableCell align="right">{""}</TableCell>
                  <TableCell align="right">
                    {`Total(w/o tax): ${totalWithoutTax.toFixed(2)}`}
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h8">{`Tax applied =  $${getTotalTax()}`}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6">{`Final Bill =  $${getTotalBill()}`}</Typography>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Grid>
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

export default dynamic(() => Promise.resolve(OrderScreen), { ssr: false });

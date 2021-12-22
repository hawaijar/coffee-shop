import dynamic from "next/dynamic";
import React, { useContext } from "react";
import { Store } from "../utils/Store";
import {
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
import Billing from '../utils/biilling'

function OrderScreen({ products }) {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

	const billing = new Billing(products,cartItems, 5.5);

  const { selectedCombos, combosFromIndividualItems, individualItems } =
		billing.getPriceDetails();

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
          {billing.getPriceAfterDiscount(
            item.product.price,
            item.product.discount,
            item.count
          )}
        </TableCell>
      </TableRow>
    ));
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
                    {`Total(w/o tax): ${billing.getTotalWithoutTax().toFixed(2)}`}
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h8">{`Tax applied =  $${billing.getTotalTax()}`}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6">{`Final Bill =  $${billing.getTotalBill()}`}</Typography>
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

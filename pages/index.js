import Layout from "../components/Layout";
import data from "../model/data";
import { Grid } from "@mui/material";
import Product from "../components/Product";
import Header from "../components/Header";
import sortBy from "lodash.sortby";
import { useContext } from "react";
import { Store } from "../utils/Store";

export default function Home({ products }) {
  const { state, dispatch } = useContext(Store);
  console.log("index state:", state);
  const { filter } = state;
  switch (filter) {
    case "Hot Classics":
      products = products.filter((p) => p.category === "HOT CLASSICS");
      break;
    case "Cold Classics":
      products = products.filter((p) => p.category === "COLD CLASSICS");
      break;
    case "Teas":
      products = products.filter((p) => p.category === "TEA");
      break;
    case "Mojito/Lemonades":
      products = products.filter((p) => p.category === "MOJITOS / LEMONADES");
      break;
    case "Iced Teas":
      products = products.filter((p) => p.category === "ICED TEAS");
      break;
    case "Combo offers":
      products = products.filter((p) => p.category === "COMBO");
      break;
    case "Others":
      products = products.filter((p) => p.category === "OTHERS");
      break;
    default:
      break;
  }

  const getProducts = () => {
    return (
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Layout>
      <div>
        {/*Header section*/}
        <Header />
        {/*List of products section*/}
        {getProducts()}
      </div>
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

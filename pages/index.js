import Layout from "../components/Layout";
import data from "../model/data";
import { Grid } from "@mui/material";
import Product from "../components/Product";
import Header from "../components/Header";

export default function Home({ products }) {
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

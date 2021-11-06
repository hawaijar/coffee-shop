import Layout from "../components/Layout";
import data from "../model/data";
import { Grid } from "@mui/material";
import Product from "../components/Product";
import Header from "../components/Header";

export default function Home() {
  const getProducts = () => {
    return (
      <Grid container spacing={3}>
        {data.products.map((product) => (
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

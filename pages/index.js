import Layout from "../components/Layout";
import data from "../model/data";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import Product from "../components/Product";

export default function Home() {
  const getHeader = () => (
    <Typography variant="h2" className={"my-5"}>
      Products
    </Typography>
  );
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
        {getHeader()}
        {/*List of products section*/}
        {getProducts()}
      </div>
    </Layout>
  );
}

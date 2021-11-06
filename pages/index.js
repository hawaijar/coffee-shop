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

export default function Home() {
  return (
    <Layout>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={product.image}
                  title={product.name}
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
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

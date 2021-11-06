import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  createTheme,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import useStyles from "../utils/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

const Layout = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>My Barista</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          className={`${classes.navbar} bg-gray-700 cursor-pointer `}
        >
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={`${classes.header} hover:underline`}>
                  My Starbucks
                </Typography>
              </Link>
            </NextLink>
            <div className={"flex-grow"} />
            <div>
              <NextLink href="/cart" passHref>
                <Link className={`hover:underline`}>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link className={`hover:underline`}>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Container className={classes.container}>{children}</Container>
      <footer className={"my-3 ml-5"}>
        <Typography>
          All rights reserved. My starbucks (hawaijar.js@gmail.com)
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;

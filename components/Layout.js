import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>My Barista</title>
      </Head>
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
      <Container className={classes.container}>{children}</Container>
      <footer>
        <Typography>All rights reserved. My starbucks</Typography>
      </footer>
    </div>
  );
};

export default Layout;

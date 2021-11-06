import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>My Barista</title>
      </Head>
      <AppBar position="static" className={"bg-gray-700 cursor-pointer "}>
        <Toolbar>
          <Typography>My Starbucks</Typography>
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

import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My Barista</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>My Starbucks</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. My starbucks</Typography>
      </footer>
    </div>
  );
};

export default Layout;

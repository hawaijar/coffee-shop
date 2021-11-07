import React, { useContext, useState } from "react";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  createTheme,
  Link,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import useStyles from "../utils/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  console.log(cart);
  console.log("state:", state);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectMenuItem = (filter) => {
    setAnchorEl(null);
    dispatch({
      type: "UPDATE_FILTER",
      payload: filter,
    });
  };

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

  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
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
            <Link>
              <Typography
                className={`${classes.header} hover:underline`}
                onClick={handleClick}
              >
                Menu
              </Typography>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleSelectMenuItem("All")}>
                  All Items
                </MenuItem>
                <MenuItem onClick={() => handleSelectMenuItem("Hot Classics")}>
                  Hot Classics
                </MenuItem>
                <MenuItem onClick={() => handleSelectMenuItem("Cold Classics")}>
                  Cold Classics
                </MenuItem>
                <MenuItem onClick={() => handleSelectMenuItem("Teas")}>
                  Teas
                </MenuItem>
                <MenuItem
                  onClick={() => handleSelectMenuItem("Mojito/Lemonades")}
                >
                  Mojito/Lemonades
                </MenuItem>
                <MenuItem onClick={() => handleSelectMenuItem("Iced Teas")}>
                  Iced Teas
                </MenuItem>
                <MenuItem onClick={() => handleSelectMenuItem("Combo offers")}>
                  Combo offers
                </MenuItem>
                <MenuItem onClick={() => handleSelectMenuItem("Others")}>
                  Others
                </MenuItem>
              </Menu>
            </Link>
            <div className={"flex-grow"} />
            <div className={"flex items-center"}>
              <NextLink href="/cart" passHref>
                <Link className={`hover:underline cursor-pointer`}>
                  {Object.keys(cartItems).length > 0 ? (
                    <Badge color="secondary" badgeContent={totalItems}>
                      {"Cart"}
                    </Badge>
                  ) : (
                    "Cart"
                  )}
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link className={`hover:underline pl-1`}>Login</Link>
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

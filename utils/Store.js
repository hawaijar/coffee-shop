import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : {},
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const { id } = newItem;
      let cartItems = state.cart.cartItems;
      if (id in cartItems) {
        cartItems[id] += 1;
      } else {
        cartItems[id] = 1;
      }
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const newItem = action.payload;
      const { id } = newItem;
      let cartItems = state.cart.cartItems;
      if (id in cartItems) {
        if (cartItems[id] > 1) {
          cartItems[id] -= 1;
        } else {
          cartItems[id] = 0;
        }
      } else {
        cartItems[id] = 0;
      }
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

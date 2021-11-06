const sortBy = require("lodash.sortby");
const TAX = 5; // 5% tax

const calculateTotalPrice = (products, cartItems) => {
  if (Object.keys(cartItems).length === 0) return 0;
  // find combo/items
  const comboItems = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p.id === +id);
    if (product && product.category === "COMBO") {
      acc.push({
        product,
        count: cartItems[id],
      });
    }
    return acc;
  }, []);

  // find individual items

  // list of combos sort by discount (DESC)
  const combosFromCombiningIndividualItems = [];
  let combos = products.filter((p) => p.category === "COMBO");
  combos = sortBy(combos, ["discount"]).reverse();
  const individualItems = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p.id === +id);
    if (product && product.category !== "COMBO") {
      acc = [
        ...acc,
        ...new Array(cartItems[id]).fill(id).map((id) => {
          return {
            id,
            flag: false,
          };
        }),
      ];
    }
    return acc;
  }, []);
};

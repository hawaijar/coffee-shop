const sortBy = require("lodash.sortby");
const difference = require("lodash.difference");
const TAX = 5; // 5% tax

export const calculateTotalPrice = (products, cartItems) => {
  if (Object.keys(cartItems).length === 0) return 0;
  // find (actual) combo/items
  const selectedCombos = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p.id === +id);
    if (product && product.category === "COMBO") {
      acc.push({
        product,
        count: cartItems[id],
      });
    }
    return acc;
  }, []);

  // find individual items and see if we can make combo(s) by combining them.

  // list of combos sort by discount (DESC)
  let combos = products.filter((p) => p.category === "COMBO");
  combos = sortBy(combos, ["discount"]).reverse();

  let individualItems = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p.id === +id);
    if (product && product.category !== "COMBO") {
      acc = [
        ...acc,
        ...new Array(cartItems[id]).fill(id).map((id) => {
          return {
            id,
            isSelectedForCombo: false,
          };
        }),
      ];
    }
    return acc;
  }, []);
  let combosFromIndividualItems = [];
  console.log("combos:", combos);
  if (combos.length > 0 && individualItems.length > 0) {
    for (let combo of combos) {
      let { items } = combo;
      if (items && items.length > 0) {
        let iItems = individualItems.filter((i) => !i.isSelectedForCombo);
        console.log(
          "diff:",
          difference(
            items,
            iItems.map((x) => +x.id)
          )
        );
        if (iItems.length) {
          while (
            difference(
              items,
              iItems.map((x) => +x.id)
            ).length === 0
          ) {
            console.log("found!");
            // Make combo from [items] and mark those individual items 'isSelectedForCombo'
            for (let item of items) {
              let isFound = false;
              for (let individual of individualItems) {
                if (+individual.id === item && !isFound) {
                  individual.isSelectedForCombo = true;
                  isFound = true;
                }
              }
            }
            // Add the combo from [items]
            combosFromIndividualItems.push({ ...combo });
            iItems = individualItems.filter((i) => !i.isSelectedForCombo);
          }
        }
      }
    }
  }
  individualItems = individualItems.filter((item) => !item.isSelectedForCombo);

  console.log("selectedCombos:", selectedCombos);
  console.log("combosFromIndividualItems:", combosFromIndividualItems);
  console.log("individualItems:", individualItems);
};

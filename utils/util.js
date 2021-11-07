const sortBy = require("lodash.sortby");
const difference = require("lodash.difference");
const TAX = 5; // 5% tax

export const calculateTotalPrice = (products, cartItems) => {
  // debugger;
  if (Object.keys(cartItems).length === 0) return 0;
  // find (actual) combo/items
  const selectedCombos = Object.keys(cartItems).reduce((acc, id) => {
    const product = products.find((p) => p.id === +id);
    if (product && product.category === "COMBO") {
      acc.push({
        id,
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

  let individualItems = [];

  for (let id of Object.keys(cartItems)) {
    const product = products.find((p) => p.id === +id);
    if (product && product.category !== "COMBO") {
      for (let i = 0; i < cartItems[id]; i++) {
        individualItems.push({
          id,
          isSelectedForCombo: false,
        });
      }
    }
  }
  // console.log("individualItems first:", individualItems);
  // console.log(
  //   "all:",
  //   individualItems.map((x) => +x.id)
  // );
  // console.log("combos:", combos);

  let combosFromIndividualItems = [];
  if (combos.length > 0 && individualItems.length > 0) {
    for (let combo of combos) {
      let { items } = combo;
      if (items && items.length > 0) {
        individualItems = individualItems.filter(
          (i) => i.isSelectedForCombo === false
        );
        if (individualItems.length) {
          while (
            items.length <= individualItems.length &&
            difference(
              items,
              individualItems.map((x) => +x.id)
            ).length === 0
          ) {
            // Make combo from [items] and mark those individual items 'isSelectedForCombo'
            for (let item of items) {
              let isFound = false;
              for (let i = 0; i < individualItems.length; i++) {
                if (!isFound) {
                  if (
                    individualItems[i].isSelectedForCombo === false &&
                    item === +individualItems[i].id
                  ) {
                    individualItems[i].isSelectedForCombo = true;
                    isFound = true;
                  }
                }
              }
            }
            // console.log("individualItems!:", individualItems);
            // Add the combo from [items]
            const combosFromIndividualItem = combosFromIndividualItems.find(
              (item) => +item.id === +combo.id
            );
            if (combosFromIndividualItem) {
              combosFromIndividualItem["count"] += 1;
            } else {
              combosFromIndividualItems.push({
                id: combo.id,
                product: combo,
                count: 1,
              });
            }
            // combosFromIndividualItems.push({ ...combo });
            individualItems = individualItems.filter(
              (i) => i.isSelectedForCombo === false
            );
          }
        }
      }
    }
  }
  individualItems = individualItems.filter((item) => !item.isSelectedForCombo);
  const temp = individualItems.slice();
  // console.log("temp:", temp);
  individualItems = [];

  for (let item of temp) {
    let { id } = item;
    const product = products.find((p) => +p.id === +id);
    const individualItem = individualItems.find((p) => +p.id === id);
    if (product && individualItem) {
      individualItem.count += 1;
    } else {
      individualItems.push({
        id,
        count: 1,
        product,
      });
    }
  }

  console.log("selectedCombos:", selectedCombos);
  console.log("combosFromIndividualItems:", combosFromIndividualItems);
  console.log("individualItems:", individualItems);

  let totalBill = 0;
  if (selectedCombos.length) {
    for (let selectedCombo of selectedCombos) {
      const { count, product } = selectedCombo;
      let singleDiscount = (product.discount / 100) * product.price;
      singleDiscount = singleDiscount.toFixed(2);
      let totalDiscount = singleDiscount * count;
      totalBill += product.price * count - totalDiscount;
    }
  }
  if (combosFromIndividualItems.length) {
    for (let item of combosFromIndividualItems) {
      const { count, product } = item;
      let singleDiscount = (product.discount / 100) * product.price;
      singleDiscount = singleDiscount.toFixed(2);
      let totalDiscount = singleDiscount * count;
      totalBill += product.price * count - totalDiscount;
    }
  }
  if (individualItems.length) {
    for (let item of individualItems) {
      const { count, product } = item;
      let singleDiscount = (product.discount / 100) * product.price;
      // singleDiscount = singleDiscount.toFixed(2);
      let totalDiscount = singleDiscount * count;
      if (totalDiscount) {
        totalDiscount = totalDiscount.toFixed(2);
      }
      totalBill += product.price * count - totalDiscount;
    }
  }
  totalBill = totalBill > 0 ? totalBill.toFixed(2) : totalBill;
  console.log("totalBill:", totalBill);
  return {
    totalBill,
    selectedCombos,
    combosFromIndividualItems,
    individualItems,
  };
};

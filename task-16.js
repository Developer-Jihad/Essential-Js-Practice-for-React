// Use the reduce method to calculate the total price of items in a shopping cart.

const shoppingCart = [
  {
    name: "Apple",
    price: 150000,
  },
  {
    name: "Asus",
    price: 110000,
  },
  {
    name: "Airpods",
    price: 42500,
  },

  {
    name: "Xiaomi",
    price: 4000,
  },
  {
    name: "A4tech",
    price: 700,
  },
];

const calculateTotal = shoppingCart.reduce((acc, current) => {
  acc += current["price"];
  return acc;
}, 0);
console.log(calculateTotal);

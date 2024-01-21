const productsStock = [
  {
    name: "Apple",
    stock: 10,
    price: 150000,
  },
  {
    name: "Asus",
    stock: 0,
    price: 110000,
  },
  {
    name: "Airpods",
    stock: 7,
    price: 42500,
  },
  {
    name: "mibro",
    stock: 12,
    price: 2500,
  },
  {
    name: "Xiaomi",
    stock: 0,
    price: 4000,
  },
  {
    name: "A4tech",
    stock: 0,
    price: 700,
  },
];
// Log the result, which should be an array of in-stock products.
const stockOutProducts = productsStock.reduce((acc, curr) => {
  if (curr.stock == 0) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(stockOutProducts);

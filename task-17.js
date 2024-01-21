const products = [
  {
    name: "Apple",
    category: "Laptop",
    price: 150000,
  },
  {
    name: "Asus",
    category: "Laptop",
    price: 110000,
  },
  {
    name: "Airpods",
    category: "Headphones",
    price: 42500,
  },
  {
    name: "mibro",
    category: "Smartwatch",
    price: 2500,
  },
  {
    name: "Xiaomi",
    category: "Smartwatch",
    price: 4000,
  },
  {
    name: "A4tech",
    category: "Mouse",
    price: 700,
  },
];
// Use the reduce method to group products by their category.
const groupObjects = products.reduce((acc, curr) => {
  if (curr.category == "Smartwatch") {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(groupObjects);

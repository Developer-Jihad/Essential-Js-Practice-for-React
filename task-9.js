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

function productsCategory(category) {
  const filteredArr = products.filter((product) => {
    if (product["category"] == category) {
      console.log(product);
    }
  });
  return filteredArr;
}
console.log(productsCategory("Laptop"));

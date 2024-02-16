const products = [
  {
    name: "Laptop",
    price: "20000",
    quantity: 2,
  },
  {
    name: "desktop",
    price: "5000",
    quantity: 2,
  },
];
const totelproductsvalue = products.map((item) => ({
  name: item.name,
  totalvalue: item.price * item.quantity,
}));
console.log(totelproductsvalue);

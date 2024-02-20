function fillNumber(n) {
  return Array(n)
  .fill(0)
  .map((_, inx) => inx + 1);
}
console.log(fillNumber(10));

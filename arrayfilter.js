const number = [1, 10, 7, 4, 9];
const two = number.filter(search);
function search(num) {
  return num > 7;
}
console.log(two);

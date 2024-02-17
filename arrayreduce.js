const array = [20, 22, 15, 44, 25];
const max = array.reduce(callback, -isFinite);
function callback(value1, value2) {
  if (value1 > value2) {
    return value1;
  } else {
    return value2;
  }
}
console.log(max);

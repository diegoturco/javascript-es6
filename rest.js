const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y ] = arr;

function sum(...rest) {
  return rest.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3

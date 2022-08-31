// Напиши функцию createArray, которая принимает целое число N
// и возвращает массив, содержащий все целые числа от 1 до N включительно.
// Обрати внимание: если N = 0, верни пустой массив.

function createArray(N) {
  if (N === 0) {
    return [];
  }

  const newArray = [];

  for (let i = 1; i <= N; i += 1) {
    newArray.push(i);
  }

  return newArray;
}

console.log(createArray(1)); // [1]
console.log(createArray(3)); // [1, 2, 3]
console.log(createArray(0)); // []

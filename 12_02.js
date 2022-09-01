// В этом задании реализуй функцию getArraysSum,
// которая принимает два массива чисел одинаковой длины,
// и возвращает сумму всех элементов этих массивов.

function getArraysSum(arr1, arr2) {
  const numbers = arr1.concat(arr2);
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(getArraysSum([1, 2], [3, 4])); // 10 (1 + 2 + 3 + 4)
console.log(getArraysSum([1, 2, 3, 4], [5, 6, 7, 8])); // 36
console.log(getArraysSum([], [])); // 0

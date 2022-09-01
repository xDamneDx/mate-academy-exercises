// Реализуй функцию combineArrays, которая принимает 2 массива
// чисел одинакового размера (first и second) и возвращает массив
// чисел, где result[i] — это сумма чисел first[i] и second [i].

function combineArrays(first, second) {
  const result = [];

  for (let i = 0; i < first.length; i += 1) {
    result.push(first[i] + second[i]);
  }

  return result;
}

console.log(combineArrays([1, 2, 5], [3, 6, 1])); // [4, 8, 6]
console.log(combineArrays([1], [6])); // [7]
console.log(combineArrays([], [])); // []

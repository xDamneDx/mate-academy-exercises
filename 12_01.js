// Создай функцию checkNumber, которая принимает целое число number
// и проверяет его по 3 критериям:

// это число положительное?
// это число четное?
// это число кратно 10?

// Функция должна вернуть массив с результатами проверок
// в виде булевых значений: true или false.

function checkNumber(number) {
  const isPositive = number > 0;
  const isEven = number % 2 === 0;
  const isMultiple = number % 10 === 0;

  return [isPositive, isEven, isMultiple];
}

console.log(checkNumber(3)); // [true, false, false]
console.log(checkNumber(10)); // [true, true, true]
console.log(checkNumber(0)); // [false, true, true]
console.log(checkNumber(-1)); // [false, false, false]

// А теперь давай научим наших роботов сортировать коробки на складе.
// Все коробки пронумерованы, и роботы учатся сортировать их по возрастанию.
// Но сортировка — дело нелегкое, иногда случаются ошибки. Поэтому
// нам пока придется проверять, правильно ли робот отсортировал коробки.
// Для этого напиши функцию isSorted, которая получает массив чисел boxNumbers
// и возвращает true, если все числа в порядке возрастания, или false — если нет.
// Обрати внимание: числа в массиве могут повторяться.

function isSorted(boxNumbers) {
  if (boxNumbers.length > 1) {
    let prevNumber = boxNumbers[0];

    for (let i = 1; i <= boxNumbers.length - 1; i += 1) {
      if (boxNumbers[i] < prevNumber) {
        return false;
      }
      prevNumber = boxNumbers[i];
    }
  }

  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([0, 1, 1, 1, 2])); // true
console.log(isSorted([1, 2, 11])); // true
console.log(isSorted([5])); // true
console.log(isSorted([])); // true
console.log(isSorted([0, 3, 1, 2, 2, 2])); // false
console.log(isSorted([1, 11, 2])); // false

// Создай функцию isSpecialNumber, которая принимает положительное
// число n и определяет, является ли оно особенным.

// Число называется особенным, если каждая его цифра не больше
// чем 5 (0, 1, 2, 3, 4 или 5).

// Функция должна возвращать строку 'Special!!', если число особенное,
// и 'NOT!!' – если нет.

function isSpecialNumber(n) {
  const nString = String(n).split("");

  for (const num of nString) {
    if (Number(num) > 5) {
      return "NOT!!";
    }
  }

  return "Special!!";
}

console.log(isSpecialNumber(2)); // 'Special!!'
// 2 — находится в интервале от 0 до 5

console.log(isSpecialNumber(9)); // 'NOT!!'
// 9 > 5

console.log(isSpecialNumber(23)); // 'Special!!'
// все цифры числа 23 находятся в интервале от 0 до 5

console.log(isSpecialNumber(38)); // 'NOT!!'
// 8 > 5

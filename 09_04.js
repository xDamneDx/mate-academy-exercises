// В этом задании реализуй функцию printNumbersBackwards,
// которая принимает положительное число N и выводит
// в консоль числа от N до 1 включительно.

// Например, если N = 5, функция должна вывести следующие числа:

// 5
// 4
// 3
// 2
// 1

function printNumbersBackwards(N) {
  for (let i = N; i >= 1; i -= 1) {
    console.log(i);
  }
}

printNumbersBackwards(7);

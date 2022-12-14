// В этом задании дана функция printNumbers,
// которая должна выводить в консоль числа от start до end включительно.
// Но сейчас она содержит бесконечный цикл и при вызове выдает ошибку Task timed out
// (Время ожидания задачи истекло). Это происходит потому, что условие выхода
// из этого цикла никогда не выполняется, и i <= end всегда верно.
// Сможешь добавить шаг цикла, чтобы исправить это?

// fix the infinite loop

function printNumbers(start, end) {
  for (let i = start; i <= end; i += 1) {
    console.log(i);
  }
}

printNumbers(10, 20);

// Усложняем работу нашего робота! Теперь он умеет преобразовывать
// команды движения в правильный сигнал и двигаться в соответствии с ним:

// 'forward' означает y + 1 (шаг вперед);
// 'back' означает y - 1 (шаг назад);
// 'right' означает x + 1 (шаг вправо);
// 'left' означает x - 1 (шаг влево).

// Но было бы здорово, чтобы робот знал, где он сейчас находится даже без GPS.
// Для этого реализуй функцию getLocation, которая принимает 2 параметра:
// массив начальных координат coordinates в виде [x, y];
// массив с командами commands в виде ['command1', 'command2', 'command3' ...].
// Функция должна возвращать массив конечных координат [x, y] после движений
// согласно командам из массива commands.

// Например, у нас есть массив с координатами coordinates = [2, 1] и
// массив с командами commands = ['left', 'back', 'back']:

// координаты после первой команды — [1, 1] (1 шаг влево);
// координаты после второй команды — [1, 0] (1 шаг назад);
// координаты после третьей команды — [1, -1] (1 шаг назад);
// результатом будет массив [1, -1].

function getLocation(coordinates, commands) {
  const coords = coordinates.slice();

  for (const command of commands) {
    if (command === "forward") {
      coords[1] += 1;
    }
    if (command === "back") {
      coords[1] -= 1;
    }
    if (command === "right") {
      coords[0] += 1;
    }
    if (command === "left") {
      coords[0] -= 1;
    }
  }

  return coords;
}

console.log(getLocation([0, 0], ["forward", "right"])); // [1, 1]
console.log(getLocation([2, 3], ["back", "back", "back", "right"])); // [3, 0]
console.log(
  getLocation([0, 5], ["back", "back", "back", "right", "left", "forward"])
); // [0, 3]

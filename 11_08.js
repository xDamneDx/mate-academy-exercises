// Давай напишем функцию compareRobots, которая получает два массива.
// Первый массив firstRobotResults — это веса грузов, перевезенных за
// день первым роботом, второй secondRobotResults — соответственно, вторым.
// Проверь, кто из роботов может перевезти больший вес, и верни строку с
// рекомендацией, кого из роботов стоит купить:

// 'First robot for sale!' — если первый робот перевозит больше груза;
// 'Second robot for sale!' — если второй робот перевозит больше груза;
// 'Both robots for sale!' — если роботы перевозят одинаковое количество груза.

function compareRobots(firstRobotResults, secondRobotResults) {
  let firstRobotResult = 0;
  let secondRobotResult = 0;

  for (const result of firstRobotResults) {
    firstRobotResult += result;
  }

  for (const result of secondRobotResults) {
    secondRobotResult += result;
  }

  return firstRobotResult === secondRobotResult
    ? "Both robots for sale!"
    : firstRobotResult > secondRobotResult
    ? "First robot for sale!"
    : "Second robot for sale!";
}

console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12])); // 'First robot for sale!' (29 > 23)
console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12])); // 'Both robots for sale!' (25 = 25)
console.log(compareRobots([1, 3, 4], [1, 1, 4, 5])); // 'Second robot for sale!' (8 < 11)

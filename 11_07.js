// Реализуй функцию getSpeedStatistic, которая принимает массив скоростей роботов
// testResults и возвращает статистику в виде массива, в котором:

// первый элемент — самая низкая скорость;
// второй элемент — самая высокая скорость;
// третий элемент — среднее значение всех скоростей, округленное вниз (используй Math.floor).

// Обрати внимание: если входной массив скоростей пуст — верни массив [0, 0, 0]

function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
    return [0, 0, 0];
  }

  let smallestSpeed = testResults[0];
  let largestSpeed = testResults[0];
  let averageSpeed = testResults[0];

  for (let i = 1; i < testResults.length; i += 1) {
    if (testResults[i] < smallestSpeed) {
      smallestSpeed = testResults[i];
    }
    if (testResults[i] > largestSpeed) {
      largestSpeed = testResults[i];
    }
    averageSpeed += testResults[i];
  }

  averageSpeed = Math.floor(averageSpeed / testResults.length);

  return [smallestSpeed, largestSpeed, averageSpeed];
}

console.log(getSpeedStatistic([])); // [0, 0, 0]
console.log(getSpeedStatistic([10])); // [10, 10, 10]
console.log(getSpeedStatistic([8, 9, 3, 12])); // [3, 12, 8]
console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8])); // [8, 12, 10]

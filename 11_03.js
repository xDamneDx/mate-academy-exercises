// Напиши функцию doublePower, которая принимает массив мощностей
// currentPowers и возвращает новый массив удвоенных мощностей.

function doublePower(currentPowers) {
  const newArray = [];

  for (const power of currentPowers) {
    newArray.push(power * 2);
  }

  return newArray;
}

console.log(doublePower([100, 150, 200, 220])); // [200, 300, 400, 440]
console.log(doublePower([45, 34, 56, 67])); // [90, 68, 112, 134]
console.log(doublePower([])); // []

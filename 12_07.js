// Давай проверим, все ли наши числа опрятные. Число считается опрятным,
// если каждая его цифра не меньше предыдущей.

// Реализуй функцию isTidy, которая принимает положительное число number
// и возвращает true, если оно опрятное, иначе — false.

function isTidy(number) {
  const numArray = String(number).split("");
  let prevNum = Number(numArray[0]);

  for (let i = 1; i < numArray.length; i += 1) {
    if (Number(numArray[i]) < prevNum) {
      return false;
    } else {
      prevNum = Number(numArray[i]);
    }
  }

  return true;
}

console.log(isTidy(12)); // true
// цифры расположены по возрастатанию

console.log(isTidy(32)); // false
// цифры расположены в убывающем порядке

console.log(isTidy(1024)); // false
// 1 > 0

console.log(isTidy(3445)); // true
// одинаковые цифры могут стоять рядом

console.log(isTidy(13579)); // true
// цифры расположены по возрастатанию

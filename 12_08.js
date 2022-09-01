// Реализуй функцию isJumping, которая принимает число number и
// возвращает строку 'JUMPING', если каждая цифра в числе отличается
// от соседней на 1. Если условие не выполняется — строку 'NOT JUMPING'.

// Обрати внимание:

// исходное число всегда положительное;
// разница между 9 и 0 не равна 1;
// если рядом стоят одинаковые цифры, то число 'NOT JUMPING';
// если число состоит из одной цифры - оно JUMPING.

function isJumping(number) {
  const numbersArr = String(number).split("");
  let prevNum = Number(numbersArr[0]);

  for (let i = 1; i < numbersArr.length; i += 1) {
    if (
      !(Number(numbersArr[i]) === prevNum - 1) &&
      !(Number(numbersArr[i]) === prevNum + 1)
    ) {
      return "NOT JUMPING";
    }

    prevNum = Number(numbersArr[i]);
  }

  return "JUMPING";
}

// // число из одной цифры
console.log(isJumping(9)); // 'JUMPING'

// // 7 и 9 отличаются на 2 а не на 1
console.log(isJumping(79)); // 'NOT JUMPING'

// все cоседние цифры отличаются на 1
console.log(isJumping(23454)); // 'JUMPING'

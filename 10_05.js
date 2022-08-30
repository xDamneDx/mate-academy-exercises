// В этом задании создай функцию makeAbbr, которая принимает строку
// из слов words и возвращает аббревиатуру из них в верхнем регистре.
// Строка words содержит одно или несколько слов, разделенных одним пробелом.

function makeAbbr(words) {
  let result = "";
  const wordsArr = words.split(" ");

  for (const words of wordsArr) {
    result += words[0].toUpperCase();
  }

  return result;
}

console.log(makeAbbr("national aeronautics space administration")); // 'NASA'
console.log(makeAbbr("central processing unit")); // 'CPU'
console.log(makeAbbr("simplified molecular input line entry specification")); // 'SMILES'

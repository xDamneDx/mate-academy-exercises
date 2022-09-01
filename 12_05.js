// Напиши функцию scrollingText, которая:
// принимает строку word;
// последовательно переставляет все символы в строке с нулевого индекса на последний;
// возвращает массив с полученными комбинациями этой строки в верхнем регистре.
// Например, для слова 'robot':

// первый шаг: берем первую букву (r) слова 'robot' и переставляем ее в конец слова — 'obotr';
// второй шаг: берем первую букву (o) слова 'obotr' и переставляем ее в конец – 'botro' и так далее.

function scrollingText(word) {
  let upperCasedWord = word.toUpperCase();
  const result = [upperCasedWord];

  for (let i = 1; i < word.length; i += 1) {
    const splittedWord = upperCasedWord.split("");
    splittedWord.push(splittedWord.shift());
    upperCasedWord = splittedWord.join("");
    result.push(upperCasedWord);
  }

  return result;
}

console.log(scrollingText("Mi")); // ['MI', 'IM']
console.log(scrollingText("WORD")); // ['WORD', 'ORDW', 'RDWO', 'DWOR']
console.log(scrollingText("aaa")); // ['AAA', 'AAA', 'AAA']
console.log(scrollingText("na vi")); // ['NA VI', 'A VIN', ' VINA', 'VINA ', 'INA V']

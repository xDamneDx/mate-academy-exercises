// Напиши функцию removeVowels, которая принимает строку doc
// и возвращает строку, где все гласные из doc удалены.
// Обрати внимание: гласными считаются буквы aeiouy в любом регистре.

function removeVowels(doc) {
  let result = "";

  for (const letter of doc) {
    if (!"aeiouy".includes(letter.toLowerCase())) {
      result += letter;
    }
  }

  return result;
}

console.log(removeVowels("document")); // 'dcmnt'
console.log(removeVowels("I like my boss")); // ' lk m bss'
console.log(removeVowels("350 euro")); // '350 r'

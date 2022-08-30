// Создай функцию isWerewolf, которая принимает строку
// target и возвращает true, если это оборотень, или false — если нет.
// Оборотень — это слово или предложение, которое читается одинаково
// в обоих направлениях (слева направо и наоборот), при этом игнорируя
// регистр, пробелы и знаки препинания.

function isWerewolf(target) {
  let mirrored = "";
  let clearedTarget = "";

  for (const letter of target) {
    if (letter.toLowerCase() !== letter.toUpperCase()) {
      clearedTarget += letter;
    }
  }

  for (let i = target.length - 1; i >= 0; i -= 1) {
    if (target[i].toLowerCase() !== target[i].toUpperCase()) {
      mirrored += target[i];
    }
  }

  return mirrored.toLowerCase() === clearedTarget.toLowerCase();
}

console.log(isWerewolf("rotator")); // true ('rotator' -> 'rotator')
console.log(isWerewolf("home")); // false ('home' -> 'emoh')
console.log(isWerewolf("Racecar")); // true (регистр игнорируется)
console.log(isWerewolf("eva, can i see bees in a cave")); // true (пробелы и знаки препинания игнорируются)

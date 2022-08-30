// Создай функцию decryptMessage, которая принимает
// строку message и возвращает строку, где символы
// из message расположены в обратном порядке.

function decryptMessage(message) {
  let result = "";

  for (let i = message.length - 1; i >= 0; i -= 1) {
    result += message[i];
  }

  return result;
}

console.log(decryptMessage("!!!reeb gniknird ekil eW")); // 'We like drinking beer!!!'
console.log(decryptMessage("0202 ni eb lliw cimednap surivanoroc A")); // 'A coronavirus pandemic will be in 2020'

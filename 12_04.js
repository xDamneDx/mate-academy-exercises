// Реализуй функцию splitString, которая принимает строку str,
// делит ее на части по 2 символа, а потом возвращает массив из полученных частей.

// Обрати внимание: если строка содержит нечетное количество символов,
// добавь подчеркивание к последнему символу _.

function splitString(str) {
  const result = [];

  if (str.length % 2 === 1) {
    str += "_";
  }

  for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
  }

  return result;
}

console.log(splitString("123456")); // ['12', '34', '56']
console.log(splitString("ab cd ef")); // ['ab', ' c', 'd ', 'ef']
console.log(splitString("abc")); // ['ab', 'c_']
console.log(splitString(" ")); // [' _']
console.log(splitString("")); // []

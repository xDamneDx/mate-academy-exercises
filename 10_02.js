// В этом задании ты проверишь, содержит ли строка указанную подстроку.
// Создай функцию isSubstring, которая принимает два параметра: phrase и part.
// Она должна возвращать true, если phrase содержит part, или false — если нет.
// Обрати внимание: функция должна учитывать регистр.

function isSubstring(phrase, part) {
    return phrase.includes(part);
}

console.log(isSubstring('string', 's'));; // true
console.log(isSubstring('string', 'ring'));; // true
console.log(isSubstring('string', 'bring'));; // false
console.log(isSubstring('string', 'Str'));; // false, потому что 'str' и 'Str' - разные строки
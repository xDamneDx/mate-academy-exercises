// Реализуй функцию countMs, которая принимает строку text
// и возвращает количество букв m в ней (как больших, так и маленьких).

function countMs(text) {
  let count = 0;

  for (const letter of text) {
    if (letter.toLowerCase() === "m") {
      count += 1;
    }
  }

  return count;
}

console.log(countMs("document")); // 1
console.log(countMs("Mermaid")); // 2 — нужно считать и 'm', и 'M'
console.log(countMs("code")); // 0

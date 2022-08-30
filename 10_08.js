// Мы усовершенствовали нашу программу по сбору статистики с вебинаров Миши.
// После сбора статистики она отправляет данные на сервер в виде строки 111001010111011,
// где 1 — это студент, который понял тему, а 0 — соответственно, нет.
// Но было бы полезно понять, сколько процентов студентов усвоили материал,
// то есть насколько вебинар был эффективен.

// Создай функцию getSuccessRate, которая принимает строку statistic и возвращает
// процент студентов, которые поняли материал, округляя до ближайшего целого
// (используй метод Math.round для округления).
// Обрати внимание: если исходная строка пустая — верни 0.

function getSuccessRate(statistic) {
  let smart = 0;

  for (const student of statistic) {
    if (Number(student)) {
      smart += 1;
    }
  }

  const successRate = Math.round((100 / statistic.length) * smart)

  return successRate ? successRate : 0;
}

console.log(getSuccessRate("11100")); // 60
console.log(getSuccessRate("1100")); // 50
console.log(getSuccessRate("000000")); // 0
console.log(getSuccessRate("11111")); // 100
console.log(getSuccessRate("")); // 0

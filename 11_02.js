// Чтобы роботы на линии собирались правильно, нужно маркировать детали.
// Разные части робота будут состоять из разного количества деталей.
// Давай сделаем наклейки для них!
// Напиши функцию makeStickers, которая принимает число detailsCount
// и строку robotPart. Функция должна возвращать массив строк в следующем
// формате: {{robotPart}} detail #{{n}} (например, Hand detail #1).
// Обрати внимание: если detailsCount = 0, верни пустой массив.

function makeStickers(detailsCount, robotPart) {
  if (detailsCount === 0) {
    return [];
  }

  const stickers = [];

  for (let i = 1; i <= detailsCount; i += 1) {
    stickers.push(`${robotPart} detail #${i}`);
  }

  return stickers;
}

console.log(makeStickers(3, "Body")); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
console.log(makeStickers(4, "Head")); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
console.log(makeStickers(0, "Foot")); // []

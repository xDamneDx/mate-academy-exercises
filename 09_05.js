// Однажды ведущий на свадьбе решил развлечь гостей и установил правило:
// каждый пришедший гость произносит тост, и все присутствующие пьют за здоровье молодых.

// Например:

// когда приходит первый гость, он пьет в одиночестве;
// когда приходит второй - пьют вдвоем;
// третий - пьют втроем и так далее.
// Если гостей 5, то всего понадобится 15 порций (1 + 2 + 3 + 4 + 5).

// Если 10, то 55 порций (1 + 2 + 3 + ... + 10).

// Реализуй функцию getDrinks, которая принимает numberOfGuests - сколько
// всего будет гостей, и возвращает необходимое количество порций выпивки.

// Еще примеры:

// getDrinks(0); // 0 - нет гостей - нет порций
// getDrinks(2); // 1 + 2 = 3
// getDrinks(6); // 1 + 2 + 3 + 4 + 5 + 6 = 21

function getDrinks(numberOfGuests) {
  let drinks = 0;

  for (let i = 1; i <= numberOfGuests; i += 1) {
    drinks += i;
  }

  return drinks;
}

console.log(getDrinks(6));

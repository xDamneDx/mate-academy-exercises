// В Mate bank есть возможность положить деньги на депозит под определенный
// процент и получить прибыль спустя некоторое время.

// Например, если положить 10000 на 3 года под 4% годовых, получим:

// первый год: 10000 + 4% = 10400 (10000 + 10000 * 0.04);
// второй год: 10400 + 4% = 10816 (10400 + 10400 * 0.04);
// третий год: 10816 + 4% = 11248.64 (10816 + 10816 * 0.04);
// чистая прибыль: 11248.64 - 10000 = 1248.64.
// Твое задание: напиши функцию calculateProfit, которая принимает 3 параметра:

// amount — начальная сумма, которую мы кладем на депозит;
// percent — годовая процентная ставка;
// period — количество лет (время на которое деньги кладутся на депозит).
// Функция должна рассчитать и вернуть сумму чистой прибыли за все время.

// Примеры (мы проверяем только целую часть):

// calculateProfit(1000, 5, 1); // 50
// calculateProfit(12500, 3, 12); // 5322

function calculateProfit(amount, percent, period) {
  let profit = 0;

  for (let i = 0; i < period; i += 1) {
    profit += ((amount + profit) / 100) * percent;
  }

  return profit;
}

console.log(calculateProfit(12500, 3, 12));

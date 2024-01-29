const currenciesDB = [];

function dinamicConverter(action, arr, exchangeCurr) {
  console.log(action, arr, exchangeCurr);
  if (action === "add") {
    let count = 0;

    const [curr, rate] = arr;
    const existingCurr = currenciesDB.find((el) => el.curr === curr);

    if (existingCurr) return "invalid data provided!";

    currenciesDB.push({ curr, rate });
    count++;

    return count;
  } else if (action === "convert") {
    const [curr, amount] = arr;
    
    if (!curr || !amount || !exchangeCurr) return "invalid data provided!";

    const currRate = currenciesDB.find((el) => el.curr === curr);
    const targetRate = currenciesDB.find((el) => el.curr === exchangeCurr);

    if (!currRate || !targetRate) return "invalid data provided!";

    const convertedAmount = (amount * currRate.rate) / targetRate.rate;

    return convertedAmount;
  }

  return "invalid action provided!";
}

module.exports = {
  dinamicConverter,
  currenciesDB,
};

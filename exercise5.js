function checkAge(month, day) {
  if (month > 12 || day > 30) {
    return "Error invalid data provided";
  }

  const currentDate = new Date();
  const currentTime = getHours(
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  const birthTime = getHours(month, day);
  const timeToBirth = birthTime - currentTime;
  const daysToBirth = timeToBirth / 24;

  if (birthTime > currentTime) {
    const monthsToBirth = Math.floor(daysToBirth / 30);
    const dayToBirth = daysToBirth % 30;

    if (monthsToBirth > 0) {
      let months = "";
      let days = "";

      monthsToBirth === 1
        ? (months = `There is ${monthsToBirth} month`)
        : (months = `There are ${monthsToBirth} months`);
      dayToBirth === 1
        ? (days = `and ${dayToBirth} day until your next birthday`)
        : (days = `and ${dayToBirth} days until your next birthday`);

      if (dayToBirth === 0) {
        return `${months} until your next birthday`;
      }

      return `${months} ${days}`;
    }

    return daysToBirth === 1
      ? `There is ${daysToBirth} day until your next bithday`
      : `There are ${daysToBirth} days until your next bithday`;
  }

  return "Sorry your birthday is passed for this year";
}

function getHours(month, day) {
  const monthInHours = month * 30 * 24;
  const dayinHours = day * 24;

  return monthInHours + dayinHours;
}
console.log(checkAge(12, 31));
module.exports = {
  checkAge,
};

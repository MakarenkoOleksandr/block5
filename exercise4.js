function tellAge(month, day, year) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day ||
    birthDate.getFullYear() !== year
  ) {
    return "Invalid date";
  }

  const timeDiff = today - birthDate;

  if (timeDiff < 0) {
    return "You can't be born in the future!";
  }

  const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `You are ${years} ${years === 1 ? "year" : "years"} old`;
  } else {
    return `You are ${days} ${days === 1 ? "day" : "days"} old`;
  }
}

module.exports = {
  tellAge,
};

function stringChop(str, chopNum) {
  const result = [];

  if (chopNum) {
    for (let i = 0; i < str.length; i += chopNum) {
      result.push(str.slice(i, i + chopNum));
    }
  } else result.push(str);

  return result;
}

module.exports = {
  stringChop,
};

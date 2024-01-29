function strCut(str, idx, idx2) {
  let newStr = "";

  if (idx !== undefined && idx2 !== undefined) {
    for (let i = 0; i < str.length; i++) {
      if (i === idx || i == idx2) continue;
      newStr += str[i];
    }
  } else newStr = str;

  return newStr;
}

module.exports = {
  strCut,
};

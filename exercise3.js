function filter(arr, dataType, minLength) {
  const filtered = arr.filter(
    (el) => typeof el !== dataType && el.length >= minLength
    );
    
  return filtered ? filtered : "no matched elements";
}

module.exports = {
  filter,
};

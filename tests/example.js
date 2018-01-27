function double(num) {
  if (isNaN(num)) {
    throw new TypeError()
  }
  return num * 2
}

module.exports = double

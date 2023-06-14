function analyzeArray(array) {
  const obj = {};
  obj["length"] = array.length;
  obj.average = array.reduce((a, b) => a + b) / array.length;
  const sorted = array.sort((a, b) => a - b);
  obj.min = sorted[0];
  obj.max = sorted[sorted.length - 1];
  return obj;
}

module.exports = analyzeArray;

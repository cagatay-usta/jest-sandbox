const analyzeArray = require("./analyze-array");

describe("analyze", () => {
  test("[1,8,3,4,2,6] ", () => {
    const analysis = {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(analysis)
  });
});

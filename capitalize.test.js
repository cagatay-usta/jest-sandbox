const capitalize = require("./capitalize");

test("hello is capitalized to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Already stays Already", () => {
  expect(capitalize("Already")).toBe("Already");
});

test("uppercase characters stay the same", () => {
  expect(capitalize("heLlO")).toBe("HeLlO");
});

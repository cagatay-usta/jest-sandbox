const reverseString = require("./reverse-string");

test("hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("something longer and with spaces", () => {
  expect(reverseString("something longer and with spaces")).toBe(
    "secaps htiw dna regnol gnihtemos"
  );
});

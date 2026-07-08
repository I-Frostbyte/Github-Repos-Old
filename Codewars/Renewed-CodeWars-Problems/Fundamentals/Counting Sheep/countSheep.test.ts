const countSheepTest = require("./countSheep.ts");

var firstArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

var secondArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
];

test("Counting Sheep: 17 in total", async () => {
  expect(countSheepTest(firstArray)).toBe(17);
});


test("Counting Sheep: 17 in total", async () => {
    expect(countSheepTest(secondArray)).toBe(20);
  });
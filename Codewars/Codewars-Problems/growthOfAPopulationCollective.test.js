const nbYear = require('./growthofapopulationcollective.js');

test("Population test for the parameters 1500, 5, 100, 5000", async () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
});

test("Population test for the parameters 1500000, 2.5, 10000, 2000000", async () => {
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
});

test("Population test for parameters 1500000, 0.25, 1000, 2000000", async () => {
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
});

test("Population test for parameters 1500000, 0.25, 1000, 2000000", async () => {
    expect(nbYear(1000, 2, 50, 1214)).toBe(3);
});

// 1500000 0.25 -1000 2000000

test("Population test for parameters 1500000, 0.25, 1000, 2000000", async () => {
    expect(nbYear(1500000, 0.25, -1000, 2000000)).toBe(151);
});
const smallestCommons = require("./smallestCommonMultiple");

test('Smallest Common Multiples', async () => {
    expect(smallestCommons([1, 5])).toEqual(60);
})

test('Smallest Common Multiples', async () => {
    expect(smallestCommons([5, 1])).toEqual(60);
})

test('Smallest Common Multiples', async () => {
    expect(smallestCommons([2, 10])).toEqual(2520);
})

test('Smallest Common Multiples', async () => {
    expect(smallestCommons([1, 13])).toEqual(360360);
})

test('Smallest Common Multiples', async () => {
    expect(smallestCommons([23, 18])).toEqual(6056820);
})
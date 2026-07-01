
const numberOfPairs = require('./pairOfGloves');

test("First test", () => {
    expect(numberOfPairs(['red', 'red'])).toBe(1);
});

test("Second test", () => {
    expect(numberOfPairs(['red', 'green', 'blue'])).toBe(0);
})

test("Third test", () => {
    expect(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])).toBe(3);
});
    

    // let tests = [
    //   [['red','red'],1],
    //   [['red','green','blue'],0],
    //   [['gray','black','purple','purple','gray','black'],3]
    // ];
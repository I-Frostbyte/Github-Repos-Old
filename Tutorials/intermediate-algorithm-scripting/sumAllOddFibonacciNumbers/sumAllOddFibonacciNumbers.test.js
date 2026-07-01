const sumFibs = require("./sumAllOddFibonacciNumbers")

test('The sum of all Odd Fibonacci Numbers within this range', async () => {
    expect(sumFibs(1)).toEqual(2);
})

test('The sum of all Odd Fibonacci Numbers within this range', async () => {
    expect(sumFibs(1000)).toEqual(1785);
})

test('The sum of all Odd Fibonacci Numbers within this range', async () => {
    expect(sumFibs(4000000)).toEqual(4613732);
})

test('The sum of all Odd Fibonacci Numbers within this range', async () => {
    expect(sumFibs(4)).toEqual(5);
})
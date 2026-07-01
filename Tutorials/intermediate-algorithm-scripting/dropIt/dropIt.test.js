const dropElements = require("./dropIt")

test('Dropping Elements under Condition', async () => {
    expect(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})).toEqual([3, 4])
})

test('Dropping Elements under Condition', async () => {
    expect(dropElements([0, 1, 0, 1], function(n) {return n === 1;})).toEqual([1, 0, 1])
})

test('Dropping Elements under Condition', async () => {
    expect(dropElements([1, 2, 3], function(n) {return n > 0;})).toEqual([1, 2, 3])
})

test('Dropping Elements under Condition', async () => {
    expect(dropElements([1, 2, 3, 4], function(n) {return n > 5;})).toEqual([])
})
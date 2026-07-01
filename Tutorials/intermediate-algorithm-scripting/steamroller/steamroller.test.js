const steamrollArray = require("./steamroller")

test('Flattening nested Arrays', async () => {
    expect(steamrollArray([[["a"]], [["b"]]])).toEqual(["a", "b"]);
})

test('Flattening nested Arrays', async () => {
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
})

test('Flattening nested Arrays', async () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
})

test('Flattening nested Arrays', async () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
})
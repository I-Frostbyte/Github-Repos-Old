const diffArray = require('./diffTwoArrays.js');

test('Comparing Two Arrays and returning an array containing their symmetric difference', async () => {
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toStrictEqual([4]);
});

test('Comparing Two Arrays and returning an array containing their symmetric difference', async () => {
    expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toStrictEqual(["pink wool"])
})
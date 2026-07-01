const whatIsInAName = require('./whereforeArtThou.js');

test('Returning the object if the value matches', async () => {
    expect(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).toStrictEqual([{ first: "Tybalt", last: "Capulet" }]);
});

test('Returning the object if the value matches', async () => {
    expect(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })).toStrictEqual( [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]);
});


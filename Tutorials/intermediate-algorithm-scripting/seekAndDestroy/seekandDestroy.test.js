const destroyer = require('./seekAndDestroy.js');

test('Removing elements that are the same as the arguments', async () => {
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toStrictEqual([1, 1]);
});

test('Removing elements that are the same as the arguments', async () => {
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toStrictEqual(["hamburger"]);
});

test('Removing elements that are the same as the arguments', async () => {
    expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toStrictEqual([12,92,65]);
});

test('Removing elements that are the same as the arguments', async () => {
    expect(destroyer([2, 3, 2, 3], 2, 3)).toStrictEqual([]);
});






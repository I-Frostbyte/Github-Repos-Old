const addTogether = require("./argumentsOptional")

test('Adding two Arguments together or returning a single one', async () => {
    expect(addTogether(2, 3)).toEqual(5);
})

test('Adding two Arguments together or returning a single one', async () => {
    expect(addTogether(5)(7)).toEqual(12);
})

test('Adding two Arguments together or returning a single one', async () => {
    expect(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toEqual(undefined);
})

test('Adding two Arguments together or returning a single one', async () => {
    expect(addTogether(2, "3")).toEqual(undefined);
})
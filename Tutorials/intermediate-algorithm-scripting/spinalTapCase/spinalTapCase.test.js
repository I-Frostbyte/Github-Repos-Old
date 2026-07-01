const spinalCase = require('./spinalTapCase.js');


test('Convert the given string into lowercase words separated by dashes', async () => {
    expect(spinalCase("This Is Spinal Tap")).toStrictEqual('this-is-spinal-tap');
})

test('Convert the given string into lowercase words separated by dashes', async () => {
    expect(spinalCase("thisIsSpinalTap")).toStrictEqual('this-is-spinal-tap');
})

test('Convert the given string into lowercase words separated by dashes', async () => {
    expect(spinalCase("The_Andy_Griffith_Show")).toStrictEqual('the-andy-griffith-show');
})

test('Convert the given string into lowercase words separated by dashes', async () => {
    expect(spinalCase("AllThe-small Things")).toStrictEqual('all-the-small-things');
})

const fearNotLetter = require('./missingLetters');

test("Find the missing letter", async () =>{
    expect(fearNotLetter("abce")).toEqual("d");
})

test("Find the missing letter", async () =>{
    expect(fearNotLetter("abcdefghjklmno")).toEqual("i");
})

test("Find the missing letter", async () =>{
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toEqual(undefined);
})
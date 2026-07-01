const translatePigLatin = require('./pigLatin.js');

test('Converting the phrase(s) to pig latin will give', async () => {
    expect(translatePigLatin("california")).toStrictEqual("aliforniacay");
})

test('Converting the phrase(s) to pig latin will give', async () => {
    expect(translatePigLatin("algorithm")).toStrictEqual("algorithmway");
})

test('Should handle words where the first vowel comes in the middle of the word', async () => {
    expect(translatePigLatin("schwartz")).toStrictEqual("artzschway");
})

test('Should handle words without vowels', async () => {
    expect(translatePigLatin("rhythm")).toStrictEqual("rhythmay");
})
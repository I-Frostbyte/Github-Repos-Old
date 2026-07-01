const convertToRoman = require("./romanNumeralConverter");

test('Roman Numeral Converter', async () => {
    expect(convertToRoman(2)).toEqual("II");
})

test('Roman Numeral Converter', async () => {
    expect(convertToRoman(12)).toEqual("XII");
})

test('Roman Numeral Converter', async () => {
    expect(convertToRoman(44)).toEqual("XLIV");
})

test('Roman Numeral Converter', async () => {
    expect(convertToRoman(891)).toEqual("DCCCXCI");
})
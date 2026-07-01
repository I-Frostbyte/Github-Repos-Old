const telephoneCheck = require("./telephoneNumberValidator");

test('Telephone Number Validator', async () => {
    expect(telephoneCheck("1 555-555-5555")).toEqual(true);
})

test('Telephone Number Validator', async () => {
    expect(telephoneCheck("555-5555")).toEqual(false);
})

test('Telephone Number Validator', async () => {
    expect(telephoneCheck("1 555)555-5555")).toEqual(false);
})

test('Telephone Number Validator', async () => {
    expect(telephoneCheck("1 555 555 5555")).toEqual(true);
})
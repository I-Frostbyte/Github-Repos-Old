const palindrome = require("./palindromeChecker");

test('Palindrome Checker', async () => {
    expect(palindrome("eye")).toEqual(true);
})

test('Palindrome Checker', async () => {
    expect(palindrome("_eye")).toEqual(true);
})

test('Palindrome Checker', async () => {
    expect(palindrome("race car")).toEqual(true);
})

test('Palindrome Checker', async () => {
    expect(palindrome("not a palindrome")).toEqual(false);
})

test('Palindrome Checker', async () => {
    expect(palindrome("A man, a plan, a canal. Panama")).toEqual(true);
})
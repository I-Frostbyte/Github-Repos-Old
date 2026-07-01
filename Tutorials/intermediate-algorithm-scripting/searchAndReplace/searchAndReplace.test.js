const myReplace = require("./searchAndReplace.js");

test("Replacing words in a string and maintaining the case", async () => {
    expect(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")).toStrictEqual("A quick brown fox leaped over the lazy dog");
});

test("Replacing words in a string and maintaining the case", async () => {
    expect(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")).toStrictEqual("A quick brown fox Leaped over the lazy dog");
});

test("Replacing words in a string and maintaining the case", async () => {
    expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toStrictEqual("He is Sitting on the couch");
})